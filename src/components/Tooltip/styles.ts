import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 12rem;
    padding: 0.8rem;
    font-size: 0.9rem;
    font-weight: normal;
    background: ${theme.colors.lighten};
    color: ${theme.colors.link};
    opacity: 0;
    visibility: hidden;
    transition: opacity 100ms, transform 100ms, 180ms ease-in-out;
    transform: translateY(1rem);
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.16),
      0 0.2rem 0.4rem rgba(0, 0, 0, 0.23);
    border-radius: 0.2rem;
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 0;
    text-align: left;

    display: flex;
    flex-direction: column;

    z-index: 1;

    > span {
      margin-bottom: 0.5rem;
      font-weight: 600;
      line-height: 1.2rem;
      color: ${theme.colors.text};
    }
  `};
`;
