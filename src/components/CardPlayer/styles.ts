import styled, { css } from 'styled-components';

export const Container = styled.li`
  ${({ theme }) => css`
    padding: 2rem;
    background: ${theme.colors.lighten};
    border-radius: 0.5rem;

    > img {
      height: 20rem;
    }

    > header {
      margin: 1.5rem 0;

      > h2,
      span {
        color: ${theme.colors.textCard};
      }

      > h2 {
        margin: 0 0 0.5rem 0;
        line-height: 1.5rem;
      }
    }
  `}
`;

export const Row = styled.div`
  ${({ theme }) => css`
    line-height: 2rem;
    border-bottom: 0.06rem solid ${theme.colors.textCard};

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }

    > h4 {
      color: ${theme.colors.textCard};
    }

    > span {
      color: ${theme.colors.link};
    }

    > small {
      padding: 0.4rem;
      color: ${theme.colors.text};
      background: ${theme.colors.badge};
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 0.8rem;
      border-radius: 0.2rem;
    }
  `}
`;
