import styled from 'styled-components';

export const Container = styled.div`
  max-width: 75rem;
  height: 100vh;
  margin: auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 6.5rem;
    margin-bottom: 3rem;
  }
`;

export const Body = styled.section`
  > div {
    > p {
      font-size: 1.8rem;
    }
  }
`;
