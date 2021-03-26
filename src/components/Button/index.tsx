import Link from 'next/link';
import { ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = {
  href: string;
  children: ReactNode;
};

const Button = ({ href, children }: ButtonProps) => (
  <Container>
    <Link href={href}>{children}</Link>
  </Container>
);

export default Button;
