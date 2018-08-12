import mongoose, {
    Schema
} from 'mongoose';

export const tournamentSchema = new Schema({
    tournamentName: {
        type: String,
        required: true
    },
    players: {
        playerA: {
            type: String,
            required: true
        },
        playerB: {
            type: String,
            required: true
        },
        playerC: {
            type: String,
            required: true
        },
        playerD: {
            type: String,
            required: true
        },
        playerE: {
            type: String,
            required: true
        },
        playerF: {
            type: String,
            required: true
        },
        playerG: {
            type: String,
            required: true
        },
        playerH: {
            type: String,
            required: true
        },
    }
})

export const Tournament = mongoose.model('Tournament', tournamentSchema)