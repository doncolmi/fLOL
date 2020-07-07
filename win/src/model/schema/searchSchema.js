const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
  {
    ogName: { type: String },
    level: { type: String, required: true },
    rankTier: { type: String, required: false },
    recentChampion: { type: String, required: false },
    date: { type: String, index: true, required: true, unique: true },
  },
  {
    versionKey: '_somethingElse',
  }
);

module.exports = mongoose.model('search', searchSchema);
