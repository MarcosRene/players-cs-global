import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 15rem 2rem;
  position: relative;

  ${media.greaterThan('medium')`
    max-width: 70rem;
  `}
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.link};
    padding: 2rem 2rem;
    margin-bottom: 2rem;

    > aside {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > div {
        width: 20rem;
        flex-direction: column;
      }
    }

    ${media.greaterThan('medium')`
      border-bottom: 0;
      border-right: 1px solid ${theme.colors.link};

       > aside {
          flex-direction: row;
       }
    `}
  `}
`;

export const Username = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    cursor: pointer;

    > h1 {
      position: relative;
      font-size: 1.6rem;
      line-height: 2.5rem;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0rem;
        height: 0.1rem;

        background: ${theme.colors.badge};
        border-radius: 0.2rem;
        transition: width 180ms ease-in-out;
      }

      &:hover:after {
        width: 90%;
      }
    }

    ${media.greaterThan('medium')`
      margin-top: 0;
    `}
  `};
`;

export const Nick = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.link};
  `};
`;

export const Info = styled.div`
  ${({ theme }) => css`
    line-height: 1.8rem;

    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > span {
      color: ${theme.colors.link};
    }
  `}
`;

export const Statistic = styled.div`
  ${({ theme }) => css`
    margin-left: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      margin-right: 2.5rem;

      > span {
        position: relative;
        font-size: 0.9rem;
        color: ${theme.colors.link};

        cursor: pointer;

        &:hover div {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
      }

      > h1 {
        font-size: 2.6rem;
        line-height: 2.3rem;

        margin-bottom: 1.8rem;
      }
    }
  `}
`;

export const Button = styled.a`
  ${({ theme }) => css`
    position: absolute;
    top: 5rem;
    left: 0;
    color: ${theme.colors.text};
    > svg {
      transition: color 180ms ease-in-out;
    }

    &:hover {
      > svg {
        color: ${theme.colors.link};
      }
    }
  `};
`;
