const Flights = require('../models/flights');

function create(req, res){
    Flights.findById(req.params.id, function(err, flight){
        console.log("hi");
        flight.destination.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        });
    });
}
module.exports = {
    create: create,
    
}