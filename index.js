const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api.yaml');
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

let buildings = [
    {
        id: 1,
        name: "building1",
        address: {
            StreetAddress: "address1",
            PostNumber: 100
        }
    },
    {
        id: 29,
        name: "building2",
        address: {
            StreetAddress: "address2",
            PostNumber: 200
        }
    },


]
app.get('/buildings', (request, response) => {
    response.status(200).send(buildings)
})

//dynamically load a page, with different ids
app.get('/buildings/:id', (request, response) => {
    const obj = buildings.find(building => building.id === parseInt(request.params.id));
    const resStatus = obj? 200 : 404;
    response.status(resStatus).send(obj);
})

app.post('/buildings', (request, response) => {
    console.log("req.body = ", request.body);
    buildings = [request.body, ...buildings];
    response.status(201).send(buildings);
})



app.listen(4000, () => console.log("up running"));
