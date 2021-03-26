import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import Button from '@components/Button';
import MetaTags from '@components/MetaTags';

import { Container, Body } from './styles';

export type PageProps = {
  heading: string;
  body: string;
};

export default function PageTemplate({ heading, body }: PageProps) {
  return (
    <>
      <MetaTags title={heading} />
      <Button href="/">
        <CloseOutline size={32} arial-label="go back home" />
      </Button>
      <Container>
        <h1>{heading}</h1>
        <Body>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Body>
      </Container>
    </>
  );
}
