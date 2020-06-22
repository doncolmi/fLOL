const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    ogName: String,
    name: { type: String, index : true, unique: true },
    encryptedId: String,
    encryptedAccountId: { type: String, index : true, unique: true },
    level: Number,
    rankTier: String,
    rankScore: Number,
    battleScore: Number,
    win: Number,
    lose: Number,
    etc: [String],
    recentMatch: String,
    recentLane: String,
    recentChampion: String,
    recentWinLose: String,
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: Date.now },
  },
  {
    versionKey: '_somethingElse',
  }
);

module.exports = mongoose.model('user', userSchema);
