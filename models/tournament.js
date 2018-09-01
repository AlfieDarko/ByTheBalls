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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
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
    },
    {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Tournament = mongoose.model('Tournament', tournamentSchema);
