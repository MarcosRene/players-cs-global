import { memo } from 'react';

import { Container, Row } from './styles';

const CardPlayer = () => (
  <Container>
    <img src="/assets/s1mple.png" alt="S1mpleo" />
    <header>
      <h2>S1mpleo</h2>
      <span>🇺🇦️ Aleksandr Kostyliev</span>
    </header>

    <Row>
      <h4>Age</h4>
      <span>23 years</span>
    </Row>

    <Row>
      <h4>Current Team</h4>
      <span>Natus Vincere</span>
    </Row>

    <Row>
      <h4>Top 20</h4>
      <span>
        #4 <small>(16)</small>
      </span>
    </Row>
  </Container>
);

export default memo(CardPlayer);
