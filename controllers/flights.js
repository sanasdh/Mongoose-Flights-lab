let Flights = require("../models/flights");
let Ticket = require("../models/tickets");
let today = new Date();
let year = (today.getFullYear() + 1).toString();
let month = (today.getMonth() + 1).toString();
let day = today.getDate().toString();

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
function index(req, res) {
  Flights.find({})
    .sort({ departs: "desc" })
    .exec(function (err, flights) {
      console.log("flights:", flights);
      res.render("flights/index", { title: "All Flights", flights, today });
    });
}
function newFunction(req, res) {
  res.render("flights/new", { title: "Add Flights", year, month, day });
}

function create(req, res) {
  const flight = new Flights(req.body);
  flight.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect("/flights/new");
    // for now, redirect right back to new.ejs
    res.redirect("/flights");
  });
}
function show(req, res) {
  Flights.findById(req.params.id, function (err, flight) {
    // console.log("flight.airline", flight);
    console.log("airport", flight.destination);
    console.log("arrival", flight.destination.arrival);
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("flights/show", { title: "Flight Detail", flight, tickets });
    });
  });
}

function addDestination(req, res) {
  Flights.findById(req.params.id, function (err, flight) {
    res.render("flights/destination", { title: "Add Destination", flight });
  });
}
function newDestination(req, res) {
  res.render("flights/show", { title: "Flight Detail", flight });
}

module.exports = {
  create: create,
  index: index,
  new: newFunction,
  show: show,
  add: addDestination,
  newDestination: newDestination,
};
