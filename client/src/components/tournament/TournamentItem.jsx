import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TournamentItem = ({ tournament }) => (
  <div>
    {console.log(tournament)}

    {tournament.map((item, i) => (
      <div key={tournament[i]._id}>
        <tr>
          <td>Tournament Name: {tournament[i].tournamentName}</td>
        </tr>
        <Link
          to={{
            pathname: `/tournament/${tournament[i]._id}`,
            state: { tournamentid: [tournament[i]._id] },
          }}
          params={{ tournament: tournament[i] }}
        >
          Go to Tournament{' '}
        </Link>
      </div>
    ))}
  </div>
);

export default TournamentItem;
