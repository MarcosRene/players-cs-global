import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 3rem;
    right: 3rem;
    color: ${theme.colors.text};
    cursor: pointer;
    z-index: 1;

    > svg {
      transition: color 180ms ease-in-out;
    }

    &:hover {
      > svg {
        color: ${theme.colors.link};
      }
    }
  `}
`;
