import MetaTags from '@components/MetaTags';
import CardPlayer from '@components/CardPlayer';
import { Container, Grid } from '@styles/home';

export default function Home() {
  return (
    <>
      <MetaTags title="Home" />
      <Container>
        <Grid>
          <CardPlayer />
        </Grid>
      </Container>
    </>
  );
}
