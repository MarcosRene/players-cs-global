import { Container } from './styles';

type MajorProps = {
  background: string;
  children: React.ReactNode;
};

const Badge = ({ background, children }: MajorProps) => (
  <Container background={background}>{children}</Container>
);

export default Badge;
