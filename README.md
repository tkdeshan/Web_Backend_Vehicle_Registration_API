# Backend_Web_API_Demo_Vehicle_Registration

Backend CRUD operation 

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Introduction

This web app is for vehicle registration. There are several field data required to register vehical that vehicleType, plateNo, owner, manufacturer, manufacturedYear, color. There are five API have been created to retrieve all data, retrieve data from id, insert new data, update data from id and delete data from id. Postman API platform is used to provide demo data.

## Getting Started

### Prerequisites

Installed before using your API.

- Node.js
- npm

### Installation

1. Clone the repository: `git clone https://github.com/tkdeshan/Web_Backend_Vehicle_Registration_API.git`
2. Navigate to the project directory: `cd Web_Backend_Vehicle_Registration_API`
3. Install dependencies: `npm install`
4. Copy example.env file and save as .env.
5. Set MongoDB URI with your credentials.
6. Start the API: `npm start`

## API Endpoints

1.GET /http://localhost:3001/api/data
  * Read all the data. 

2.GET /http://localhost:3001/api/data/:id
  * Read data from Id.

3.POST /http://localhost:3001/api/data
  * Insert data.

    {
        "vehicleType":"CAR",   
        "plateNo":"ABB-4579",    
        "owner":"Kavinda",    
        "manufacturer":"Tesla",    
        "manufacturedYear":"2023",   
        "color":"red"   
    }

4.PUT /http://localhost:3001/api/data/:id
  * Update data from Id.

5.DELETE /http://localhost:3001/api/data/:id
  * Delete data from Id.
    
