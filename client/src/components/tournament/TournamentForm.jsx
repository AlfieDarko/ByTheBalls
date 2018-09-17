import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/main.less';

import TextInput from '../common/TextInput';

const TournamentForm = props => {
  return (
    <div>
      <div id={styles.bracket}>
        <div className={styles.container}>
          <div className={styles['form-div']}>
            <form>
              <h1>Create Tournament</h1>

              <TextInput
                name="tournamentName"
                label="Tournament Name"
                onChange={props.onChange}
              />
              <br />

              <TextInput
                id="playerA"
                name="playerA"
                label="Player 1"
                onChange={props.onChange}
              />
              <TextInput
                id="playerB"
                name="playerB"
                label="Player 2"
                onChange={props.onChange}
              />
              <TextInput
                id="playerC"
                name="playerC"
                label="Player 3"
                onChange={props.onChange}
              />
              <TextInput
                id="playerD"
                name="playerD"
                label="Player 4"
                onChange={props.onChange}
              />
              <TextInput
                id="playerE"
                name="playerE"
                label="Player 5"
                onChange={props.onChange}
              />
              <TextInput
                id="playerF"
                name="playerF"
                label="Player 6"
                onChange={props.onChange}
              />
              <TextInput
                id="playerG"
                name="playerG"
                label="Player 7"
                onChange={props.onChange}
              />
              <TextInput
                id="playerH"
                name="playerH"
                label="Player 8"
                onChange={props.onChange}
              />
              <TextInput
                id="playerI"
                name="playerI"
                label="Player 9"
                onChange={props.onChange}
              />
              <TextInput
                id="playerJ"
                name="playerJ"
                label="Player 10"
                onChange={props.onChange}
              />
              <TextInput
                id="playerK"
                name="playerK"
                label="Player 11"
                onChange={props.onChange}
              />
              <TextInput
                id="playerL"
                name="playerL"
                label="Player 12"
                onChange={props.onChange}
              />
              <TextInput
                id="playerM"
                name="playerM"
                label="Player 13"
                onChange={props.onChange}
              />
              <TextInput
                id="playerN"
                name="playerN"
                label="Player 14"
                onChange={props.onChange}
              />
              <TextInput
                id="playerO"
                name="playerO"
                label="Player 15"
                onChange={props.onChange}
              />
              <TextInput
                id="playerP"
                name="playerP"
                label="Player 16"
                onChange={props.onChange}
              />
              <input
                type="submit"
                value="Submit Tournament"
                onClick={props.onSave}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentForm;
