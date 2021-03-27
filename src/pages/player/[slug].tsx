import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import client from '@graphql/client';
import {
  GetPlayerBySlugQuery,
  GetPlayersQuery,
} from '@graphql/generated/graphql';
import { PlayerProps } from 'templates/types/player';
import Players from 'templates/Players';

import { GET_PLAYERS, GET_PLAYER_BY_SLUG } from '@constants/queries';

export default function Player({ player }: PlayerProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Players player={player} />;
}

export async function getStaticPaths() {
  const { players } = await client.request<GetPlayersQuery>(GET_PLAYERS, {
    first: 3,
  });

  const paths = players.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { player } = await client.request<GetPlayerBySlugQuery>(
    GET_PLAYER_BY_SLUG,
    {
      slug: `${params?.slug}`,
    },
  );

  if (!player) return { notFound: true };

  return {
    props: {
      player,
    },
  };
};
