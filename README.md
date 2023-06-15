Cost Manager REStful Web Services
Welcome to Cost Manager REStful Web Services, a project aimed at developing specific parts of REStful Web Services to facilitate the management of daily costs through a client application.

Exploratory Video
To get started, we invite you to watch our explanatory video on YouTube: Cost Manager Exploratory Video

Database
We have successfully saved the database in MongoDB using the MongoDB Atlas service. The data is efficiently organized in collections, including the users and costs collections. We have implemented the Computed pattern, ensuring optimal performance. The costs are conveniently organized based on the following categories: food, health, housing, sport, education, transportation, and other.

In the users collection, you will find documents that contain the following properties: id, first_name, last_name, and birthday. On the other hand, the costs collection holds documents with properties such as: user_id, year, month, day, id, description, category, and sum.

Application
Our application, developed using the Express.js framework and the Mongoose library, is running seamlessly on the server side. We have used JavaScript to implement the REStful web services, adhering to the specified requirements. Promises are utilized throughout the codebase to ensure smooth execution.

The following REStful web service endpoints are available for interacting with the application:

POST /addcost: Use this endpoint to add a new cost item. Include the following parameters in the request body: sum, category, year, month, day, description, and user_id. The response will be a simple JSON document that describes the added cost, following the same property names.

GET /report: This endpoint allows you to retrieve a detailed report for a specific month and year, using the GET method. Include the parameters year, month, and user_id in the request. The returned JSON document will provide an object with properties representing the possible categories. Each property will contain an array of objects describing cost items. All categories, including those without any costs, will be included in the response.

GET /about: Use this endpoint to obtain information about the developers involved in this project. It returns a JSON array containing objects that describe each developer. The object properties include firstname, lastname, id, and email.

Thank you for choosing Cost Manager REStful Web Services. We hope this application helps you efficiently manage your daily costs.
