import mongoose, { Schema } from 'mongoose';

export const tournamentSchema = new Schema({
  tournamentName: {
    type: String,
    required: true,
  },
  players: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      wonFirstMatch: {
        type: Boolean,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
      },
      wonSemiFinalMatch: {
        type: Boolean,
      },
      wonFinalMatch: {
        type: Boolean,
      },
    },
  ],
});

export const Tournament = mongoose.model('Tournament', tournamentSchema);
