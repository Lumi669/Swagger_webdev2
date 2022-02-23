const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load('./api.yaml');
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

const buildings = [
    {
        id: 1,
        name: "building1",
        address: {
            StreetAddress: "address1",
            PostNumber: 100
        }
    },
    {
        id: 2,
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

app.get('/buildings/2', (request, response) => {
    response.status(200).send(buildings[1])
})




app.listen(4000, () => console.log("up hhand running"));
