import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TournamentItem = ({ tournament }) => {
  return (
    <React.Fragment>
      <tr>
        <td>Tournament Link</td>
        <td>Tournament Name: {tournament.tournamentName}</td>
      </tr>
      Players
      <tr>
        <td>{tournament.players.playerA}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerB}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerC}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerD}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerE}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerF}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerG}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerH}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerI}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerJ}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerK}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerL}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerM}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerN}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerO}</td>
      </tr>
      <tr>
        <td>{tournament.players.playerP}</td>
      </tr>
      <tr>
        <Link
          to={`/tournament/${tournament._id}`}
          params={{ tournament: tournament }}
        >
          Go to Touurnament Bracket
        </Link>
      </tr>
    </React.Fragment>
  );
};

export default TournamentItem;
