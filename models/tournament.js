import mongoose, { Schema } from 'mongoose';

export const TournamentSchema = new Schema({
    tournamentName: {
        type: String,
        unique: true,
        required: true    
    },
    players: {
        type: Array,
        validate: [arrayLimit, '{PATH} exceeds the limit of 8']
    }
})

export function arrayLimit(val) {
    return val.length <= 8;
  }