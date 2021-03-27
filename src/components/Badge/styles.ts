import styled, { css } from 'styled-components';

type MajorProps = {
  background: string;
};

export const Container = styled.small<MajorProps>`
  ${({ theme, background }) => css`
    padding: 0.4rem;
    color: ${theme.colors.text};
    background: ${background};
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 0.8rem;
    border-radius: 0.2rem;
  `}
`;
