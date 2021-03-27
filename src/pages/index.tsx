import { GetStaticProps } from 'next';

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import client from '@graphql/client';
import { GetPlayersQuery } from '@graphql/generated/graphql';

import MetaTags from '@components/MetaTags';
import CardPlayer from '@components/CardPlayer';
import { Container, Grid } from '@styles/home';
import Button from '@components/Button';
import { PlayersProps } from '@pages/types/player';
import { GET_PLAYERS } from '@constants/queries';

export default function Home({ players }: PlayersProps) {
  return (
    <>
      <MetaTags title="Home" />
      <Button href="/about">
        <InfoOutline size={32} arial-label="about" />
      </Button>
      <Container>
        <Grid>
          <CardPlayer players={players} />
        </Grid>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { players } = await client.request<GetPlayersQuery>(GET_PLAYERS);

  return {
    props: { players },
  };
};
