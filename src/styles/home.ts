import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  padding: 15rem 2rem;

  ${media.greaterThan('medium')`
    width: 100%;
    max-width: 75rem;
    height: 100%;
    margin: 0 auto;
    padding-right: 0;
    padding-left: 0;
  `}
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  gap: 1.5rem;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}
`;
