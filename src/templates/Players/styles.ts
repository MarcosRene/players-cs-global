import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  height: 100%;
  margin: 0 auto;
  padding-top: 15rem;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    border-right: 1px solid ${theme.colors.link};
    padding: 0 2rem;

    > aside {
      display: flex;
      justify-content: center;
      align-items: center;

      /* img {
        background-image: linear-gradient(
          -90deg,
          #e7edf1 0%,
          #f8f8f8 50%,
          #e7edf1 100%
        );

        background-size: 100% 100%;
        animation: shimmer 1s ease-in-out infinite;

        @keyframes shimmer {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: -135% 0%;
          }
        }
      } */

      > div {
        width: 20rem;
        flex-direction: column;
      }
    }
  `}
`;

// export const Shimmer = styled.div`
//   ${({ theme }) => css`
//     border-radius: 0.2rem;

//     img {
//       background-image: linear-gradient(
//         -90deg,
//         #e7edf1 0%,
//         #f8f8f8 50%,
//         #e7edf1 100%
//       );

//       background-size: 400% 400%;
//       animation: shimmer 180ms ease-in-out infinite;

//       @keyframes shimmer {
//         0% {
//           background-position: 0% 0%;
//         }
//         100% {
//           background-position: -135% 0%;
//         }
//       }
//     }
//   `}
// `;

export const Username = styled.div`
  ${({ theme }) => css`
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
