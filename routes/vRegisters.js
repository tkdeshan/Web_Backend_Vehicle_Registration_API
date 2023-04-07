const express = require('express');
const Vehicles = require('../models/vRegisters');

const router = express.Router();

//retrive all vehicles data - API
router.get('/api/data', async (req, res) => {
    try {   
      const savedVehicles = await Vehicles.find();
      console.log(savedVehicles);
      return res.status(200).json({
        savedVehicles           
      });
    }
    catch (err) {
      console.error(err);
      return res.status(400).json({
        Failed:"Server error",
        error:err
      });
    }
});


//retrive vehicle data from ID - API
router.get('/api/data/:id', async (req, res) => {
    try {   
      const savedVehicle = await Vehicles.findById(req.params.id);
      console.log(savedVehicle);
      return res.status(200).json({
        savedVehicle           
      });
    }
    catch (err) {
      console.error(err);
      return res.status(400).json({
        Failed:"Server error",
        error:err
      });
    }
});
  

//save new vehicle data - API
router.post('/api/data', (req,res) =>{
    let newVehicle = new Vehicles(req.body);
    newVehicle.save()
    .then(savedVehicle => {
        console.log('New vehicle saved successfully');
        console.log(savedVehicle);
        return res.status(200).json({
            Success:"New vehicle saved successfully",savedVehicle            
        });
    })
    .catch(error => {
        console.error('Error saving data:', error);
        return res.status(400).json({
            Failed:"Server error",
            error:err
        });
    });
});

//update vehicle data
router.put('/api/data/:id', async (req, res) => {
    try {   
        const updatedVehicle = await Vehicles.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log('Vehicle data updated successfully');
        console.log(updatedVehicle);
        return res.status(200).json({
            Success:"Vehicle data updated successfully",updatedVehicle            
        });       
      }
      catch (err) {
        console.error(err);
        res.status(500).send('Internal server error'); return res.status(400).json({
            Failed:"Server error",
            error:err
        });
      }
});


//delete vehicle data
router.delete('/api/data/:id', async (req, res) => {
    try {   
        const deletedVehicle = await Vehicles.findByIdAndDelete(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        console.log('Vehicle data deleted successfully');
        console.log(deletedVehicle);
        return res.status(200).json({
            Success:"Vehicle data deleted successfully",deletedVehicle            
        });
      }
      catch (err) {
        console.error(err);
        return res.status(400).json({
            Failed:"Server error",
            error:err
        });
      }
});


module.exports = router;

