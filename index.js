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
        buildingName: "building1",
        address: {
            StreetAddress: "address1",
            PostNumber: 100
        }
    },
    {
        id: 29,
        buildingName: "building2",
        address: {
            StreetAddress: "address2",
            PostNumber: 200
        }
    },
];


app.get('/buildings', (request, response) => {
    response.status(200).send(buildings)
});

//dynamically load a page, with different ids
app.get('/buildings/:id', (request, response) => {
    const obj = buildings.find(building => building.id === parseInt(request.params.id));
    const resStatus = obj? 200 : 404;
    response.status(resStatus).send(obj);
});

app.post('/buildings', (request, response) => {
    console.log("req.body = ", request.body);
    buildings = [request.body, ...buildings];
    response.status(201).send(buildings);
});

app.patch('/buildings/:id', (request, response) => {
    console.log("req.body = ", request.body);

    function updateName(building){
        if (building.id === parseInt(request.params.id)){
            building.buildingName = request.body.buildingName;
            return true;
        }
        return false;
    }

    updatedBuilding = buildings.filter(updateName);

    response.status(201).send(updatedBuilding);
});



app.listen(4000, () => console.log("up running"));
