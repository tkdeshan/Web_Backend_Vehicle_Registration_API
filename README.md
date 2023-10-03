# Backend_Web_API_Demo_Vehicle_Registration
This web app is for vehicle registration. There are several field data required to register vehical that vehicleType, plateNo, owner, manufacturer, manufacturedYear, color. There are five API have been created to retrieve all data, retrieve data from id, insert new data, update data from id and delete data from id. Postman API platform is used to provide demo data.

# How to run
you can run this app using yarn start command and can be used postman to test that creating five API.

1.GET /http://localhost:3001/api/data

2.GET /http://localhost:3001/api/data/:id

3.POST /http://localhost:3001/api/data

4.PUT /http://localhost:3001/api/data/:id

5.DELETE /http://localhost:3001/api/data/:id

# Sample data
{

    "vehicleType":"CAR",
    
    "plateNo":"ABB-4579",
    
    "owner":"Kavinda",
    
    "manufacturer":"Tesla",
    
    "manufacturedYear":"2023",
    
    "color":"red"
   
}


