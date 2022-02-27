# Swagger_webdev2

Swagger can help to create documentation and also can acts like POSTMAN for testing codes
One can implement swagger code in swagger editor or use VS CODE like here
use vscode, should create a server using index.js, create a nodemon.json file listing what type of files nodemon watch, it it does not watch, then server will not update. Nodemon is for refresh webpage usage. The 3rd file is api.yaml file for writing...

Note:

1.  This project is learnt from the below tutorial
    https://www.youtube.com/watch?v=EnMQm365t_s

2.  The description of the project assignment is from Tuni2022 Spring webdev-2-architecure:

Assignment 1: RESTful API with Swagger (Due Feb 28th)
We recommend starting this individual assignment only after studying lecture 3 (web services, SOA), if possible. However, if you know you are going to be very busy near the end of February, you may start already.

Overview:
First things first: to see the Swagger 2.0 specification navigate to https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md. There are online tools available for creating Swagger APIs. With Swagger Editor https://editor.swagger.io you can try out editing the classic Pet Shop example Swagger API. Pet Shop example covers the basics well, so read through the API. If you so wish, you can alternatively use the newer Open API Specification 3.0 instead. Note: The specification was written with Swagger 2.0 (the version before Open API Specification 3.0), as some Swagger tools don’t support OAS 3.0 yet.

In this assignment, you will learn how to design and specify an API with Swagger 2.0. Your task is to produce an API for building a sensor network, but the focus of this assignment is to familiarize yourself with the Swagger instead of trying to convey the best possible API for such a network. Below are details of what to include in the API:

API Requirements:
Models
Two models need to be defined in the API's definitions: Building and Sensor.

Building
Properties of Building objects:

id: a unique string
name: string
address: an object with two properties:
. Street address: string
. Post Number: integer

Sensor
Properties of Sensor objects:

id: unique string
name: string
value: number
state: enum (posssible values: "online", "offline", "error")

You can presume that there is a database that has linked the Sensors with their corresponding Buildings and that all of these IDs are known to you. Therefore, you don't need to add a Building ID under the sensor separately or create methods into the API to retrieve these IDs from the database. However, if it makes API design easier for you, you may create such additions so long as they don't conflict with the other methods.

Methods
The attributes, HTTP methods, and functionality required from the API are defined here. Paths, response codes, tags, etc. are for you to decide:

GET method to receive all Buildings
GET method to fetch a Building with a specific Building ID
POST method for adding a new Building. Building data is included as JSON in the message body
PATCH method for updating a Building with a specific Building ID.
PUT method for adding a new Sensor.
DELETE method for removing a Sensor.
GET method to retrieve all sensors in a Building that has a specific Building ID
GET method to retrieve all sensors in a certain state(s). State(s) MUST be specified as query string
Other details:
use Swagger 2.0 (or OAS 3.0)
modify API info object to include:
name of your API ("title")
brief description of your API ("description" )
your email, your name ("contact information")
Use tags to label your methods.
Submitting the Assignment:
When you're happy with the API, export/save it as a YAML file and include it in your submission. Avoid direct copy-pasting it into the submission text box if possible.
