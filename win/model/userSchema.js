const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    encryptedId : String,
    encryptedAccountId : String,
    level: Number,
    rankTier : String,
    rankScore : Number,
    win : Number,
    lose : Number,
    etc : String,
    recentMatch : String,
    recentChampion : String,
    recentWinLose : String,
    createdDate: { type: Date, default : Date.now },
    modifiedDate: { type: Date, default : Date.now }
},
{
    versionKey : "_somethingElse"
})

module.exports = mongoose.model("user", userSchema);