import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 75rem;
  height: 100%;
  margin: 0 auto;
  padding-top: 15rem;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 1.5rem;
`;
