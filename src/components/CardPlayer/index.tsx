import { useRouter } from 'next/dist/client/router';
import { memo } from 'react';

import { useTheme } from 'styled-components';
import { PlayersProps } from 'templates/types/player';

import Badge from '@components/Badge';

import { Container, Row } from './styles';

const CardPlayer = ({ players }: PlayersProps) => {
  const router = useRouter();
  const theme = useTheme();

  const handleBySlug = (playerSlug: string) =>
    router.push(`/player/${playerSlug}`);

  return (
    <>
      {players?.map((player) => {
        const major = player.major === 0;
        const backgroundMajor = theme.colors[major ? 'badgeAlert' : 'badge'];

        return (
          <Container key={player.id} onClick={() => handleBySlug(player.slug)}>
            <img src={player.avatar?.url} alt={player.name} />
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
              <Badge
                background={backgroundMajor}
              >{`${player.major} x Major winner`}</Badge>
            </Row>
          </Container>
        );
      })}
    </>
  );
};

export default memo(CardPlayer);
