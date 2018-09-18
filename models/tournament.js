import mongoose, { Schema } from 'mongoose';

export const tournamentSchema = new Schema({
  tournamentName: {
    type: String,
    required: true,
  },
  players: {
    playerA: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerB: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerC: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerD: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerE: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerF: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerG: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerH: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerI: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerJ: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerK: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerL: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerM: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerN: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerO: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
    playerP: {
      id: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      firstMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFirstMatch: {
        type: Boolean,
        default: null,
      },
      quarterFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonQuarterFinalMatch: {
        type: Boolean,
        default: null,
      },
      semiFinalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonSemiFinalMatch: {
        type: Boolean,
        default: null,
      },
      finalMatchPoints: {
        type: Number,
        default: 0,
      },
      wonFinalMatch: {
        type: Boolean,
        default: null,
      },
    },
  },
});

export const Tournament = mongoose.model('Tournament', tournamentSchema);
