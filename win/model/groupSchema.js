const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: { type: String, unique: true, index: true },
    members: [String],
    membersNum: Number,
    open : Boolean,
    password: String,
    adminPassword: String,
    salt: String,
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
  },
  {
    versionKey: '_somethingElse',
  }
);

groupSchema.index({ name: 1 });

module.exports = mongoose.model('group', groupSchema);
