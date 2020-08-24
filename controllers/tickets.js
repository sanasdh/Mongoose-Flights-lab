let Flights = require("../models/flights");
let Ticket = require("../models/tickets");

module.exports = {
  create,
  new: newFunction,
};

function create(req, res) {
  const tickets = new Ticket(req.body);
  tickets.seat = req.body.seat;
  tickets.price = req.body.price;
  tickets.flight = req.params.id;
  tickets.save(function (err) {
    Flights.findById(req.params.id, function (err, flight) {
      res.redirect(`/flights/${flight._id}/tickets/new`);
    });
  });
}

function newFunction(req, res) {
  Flights.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("tickets/new", { title: "Add Tickets", tickets, flight });
    });
  });
}
