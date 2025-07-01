const mongoose = require("mongoose");

const { Schema } = mongoose;

const accountSchema = new Schema({
  category: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  debit: { type: Number, default: 0 },
  credit: { type: Number, default: 0 },
  transactionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("account", accountSchema);
