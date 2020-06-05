const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    ogName: String,
    name: String,
    encryptedId: String,
    encryptedAccountId: String,
    level: Number,
    rankTier: String,
    rankScore: Number,
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

userSchema.index({ name: 1, encryptedId: 1 });

module.exports = mongoose.model('user', userSchema);
