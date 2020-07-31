const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticeSchema = new Schema(
  {
    code: { type: String, index: true, required: true },
    content: { type: String, index: true, required: true },
    createdDate: { type: Date, default: Date.now, index: true },
    modifiedDate: { type: Date, default: Date.now },
  },
  {
    versionKey: '_somethingElse',
  }
);

module.exports = mongoose.model('notice', noticeSchema);
