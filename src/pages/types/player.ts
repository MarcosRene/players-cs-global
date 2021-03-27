type AvatarProps = {
  url: string;
  width: string;
  height: string;
};

type Player = {
  id: string;
  slug: string;
  nick: string;
  name: string;
  avatar: AvatarProps;
  age: number;
  team: number;
  major: number;
  ratio: number;
  dpr: number;
  kast: number;
  impact: number;
  adr: number;
  kpr: number;
};

export type PlayersProps = {
  players: Player[];
};
