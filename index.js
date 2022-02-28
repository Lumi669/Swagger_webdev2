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

let sensors = [
    {
        id: "sensor1",
        sensorName: "sensorOne",
        value: 2.6,
        state: "online"
    },
    {
        id: "sensor2",
        sensorName: "sensorTwo",
        value: 5.6,
        state: "error"
    },
    {
        id: "sensor3",
        sensorName: "sensorThree",
        value: 8.6,
        state: "offline"
    },
    {
        id: "sensor4",
        sensorName: "sensorFour",
        value: 9.6,
        state: "online"
    },
    {
        id: "sensor5",
        sensorName: "sensorFive",
        value: 10.6,
        state: "error"
    },

]

let buildingSensors = [
    {
        id: 1, 
        sensors: ["sensor1", "sensor4", "sensor5" ]
    },
    {
        id: 29,
        sensors: ["sensor2", "sensor3"]
    }
]



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

app.get('/buildings/:id/sensors', (request, response) => {

    const obj = buildingSensors.find(item => item.id === parseInt(request.params.id));
    const sensors = obj.sensors;

    console.log(sensors);
    response.status(200).send(sensors);
});

app.get('/sensors/:state', (request, response) => {
    console.log(request.params);

    const stateSensors = sensors.filter(item => item.state === request.params.state);
    console.log("statesensors = ", stateSensors);
    response.status(200).send(stateSensors);
});

app.put('/sensors/:id', (request, response) => {
    console.log("req.body = ", request.body);

    function updateName(sensor){
        if (sensor.id === request.params.id){
            sensor.name = request.body.sensorName;
            return true;
        }
        return false;
    }
    const updatedSensor = sensors.filter(updateName);
    response.status(201).send(updatedSensor);
});

app.delete('/sensors/:id', (request, response) => {
    console.log("req.params = ", request.params);

    
    const sensorsAfterDel = sensors.filter(item => item.id !== request.params.id);
    response.status(200).send(sensorsAfterDel);
});




app.listen(4000, () => console.log("up running"));
