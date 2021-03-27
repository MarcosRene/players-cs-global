import { memo } from 'react';

import { PlayersProps } from '@pages/types/player';

import { Container, Row } from './styles';

const CardPlayer = ({ players }: PlayersProps) => (
  <div>
    {players?.map((player) => (
      <Container key={player.id}>
        <img src={player.avatar.url} alt={player.name} />
        <header>
          <h2>{player.nick}</h2>
          <span>{player.name}</span>
        </header>

        <Row>
          <h4>Age</h4>
          <span>{`${player.age} years`}</span>
        </Row>

        <Row>
          <h4>Current Team</h4>
          <span>{player.team}</span>
        </Row>

        <Row>
          <h4>Major achievements</h4>
          <small>{`${player.major} x Major winner`}</small>
        </Row>
      </Container>
    ))}
  </div>
);

export default memo(CardPlayer);
