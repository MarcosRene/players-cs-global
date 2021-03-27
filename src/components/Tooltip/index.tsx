import { Container } from './styles';

type TooltipProps = {
  title: string;
  children: React.ReactNode;
};

const Tooltip = ({ title, children }: TooltipProps) => (
  <Container>
    <span>{title}</span>
    {children}
  </Container>
);
export default Tooltip;
