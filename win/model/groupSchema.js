const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: { type: String, unique: true, index: true, required: true },
    code: { type: String, unique: true, index: true, required: true },
    members: { type: [String], default: [] },
    membersNum: { type: Number, default: 0 },
    open: { type: Boolean, default: true, required: true },
    password: { type: String, default: '' },
    adminPassword: { type: String, required: true },
    salt: { type: String, required: true, default: '0226' },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
  },
  {
    versionKey: '_somethingElse',
  }
);

groupSchema.index({ name: 1 });

module.exports = mongoose.model('group', groupSchema);
