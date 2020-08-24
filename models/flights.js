const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: String,
    arrival: Date,
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    airline: String,
    airport: {
      type: String,
      default: "DEN",
    },
    flightNo: Number,
    departs: {
      type: Date,
      default: Date.now,
    },
    destination: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flights", flightSchema);
