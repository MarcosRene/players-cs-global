import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import MetaTags from '@components/MetaTags';
import CardPlayer from '@components/CardPlayer';
import { Container, Grid } from '@styles/home';
import Button from '@components/Button';

export default function Home() {
  return (
    <>
      <MetaTags title="Home" />
      <Button href="/about">
        <InfoOutline size={32} arial-label="about" />
      </Button>
      <Container>
        <Grid>
          <CardPlayer />
        </Grid>
      </Container>
    </>
  );
}
