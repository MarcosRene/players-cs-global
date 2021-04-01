import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

import { ArrowBackOutline as ArrowBack } from '@styled-icons/evaicons-outline/ArrowBackOutline';
import { useTheme } from 'styled-components';

import Tooltip from '@components/Tooltip';
import Badge from '@components/Badge';

import { PlayerProps } from '../types/player';
import {
  Container,
  Content,
  Profile,
  Statistic,
  Username,
  Nick,
  Info,
  Button,
} from './styles';

const Players = ({ player }: PlayerProps) => {
  const router = useRouter();
  const theme = useTheme();

  const major = player.major === 0;
  const backgroundMajor = theme.colors[major ? 'badgeAlert' : 'badge'];

  if (router.isFallback) return null;

  return (
    <Container>
      <Button href="/">
        <ArrowBack size={32} arial-label="go back home" />
      </Button>
      <Content>
        <Profile>
          <aside>
            <Image
              src={player.avatar?.url}
              alt={player.name}
              width={270}
              height={290}
              quality={75}
            />
            <div>
              <Username>
                <h1>{player.name}</h1>
                <Nick>{player.nick}</Nick>
              </Username>
              <Info>
                <h4>Age</h4>
                <span>{player.age}</span>
              </Info>
              <Info>
                <h4>Current Team</h4>
                <span>{player.team}</span>
              </Info>
              <Info>
                <h4>Major achievements</h4>
                <Badge
                  background={backgroundMajor}
                >{`${player.major} x Major winner`}</Badge>
              </Info>
            </div>
          </aside>
        </Profile>
        <Statistic>
          <div>
            <span>
              RATIO 1.0
              <Tooltip title="Ratio">
                The rating tells us if the player put up above or below average
                numbers, with 1.00 being the average.
              </Tooltip>
            </span>
            <h1>{player.ratio}</h1>

            <span>
              DPR
              <Tooltip title="DPR">Deaths per round.</Tooltip>
            </span>
            <h1>{player.dpr}</h1>

            <span>
              KAST
              <Tooltip title="KAST">
                Percentage of rounds in which the player either had a kill,
                assist, survived or was traded.
              </Tooltip>
            </span>
            <h1>{`${player.kast}%`}</h1>
          </div>
          <div>
            <span>
              IMPACT
              <Tooltip title="Impact">
                Measures the impact made from multikills, opening kills, and
                clutches.
              </Tooltip>
            </span>
            <h1>{player.impact}</h1>

            <span>
              ADR
              <Tooltip title="ADR">Average damage per round.</Tooltip>
            </span>
            <h1>{player.adr}</h1>

            <span>
              KPR
              <Tooltip title="KPR">Kills per round</Tooltip>
            </span>
            <h1>{player.kpr}</h1>
          </div>
        </Statistic>
      </Content>
    </Container>
  );
};

export default Players;
