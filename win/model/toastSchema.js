const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toastSchema = new Schema(
  {
    name: { type: String, index: true, required: true },
    title: { type: String, required : true },
    content : { type : String, required: true},
    img: { type:String, required:true }
    class: { type: String, required: true, default: 'blackToast'}
  },
  {
    versionKey: '_somethingElse',
  }
);

module.exports = mongoose.model('toast', toastSchema);
