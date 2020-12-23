import { Schema } from 'mongoose'

let xp:Schema = new Schema({
    uid: {type: String , required: true},
    currentRank: {type: Number, required: true},
})