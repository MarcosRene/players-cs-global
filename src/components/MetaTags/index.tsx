import Head from 'next/head';

type MetaTagsProps = Partial<{
  title: string;
  description: string;
  canonical: string;
  image: string;
}>;

const MetaTags = (props: MetaTagsProps) => {
  const { title, description, canonical, image } = props;

  const pageTitle = title ? `${title} | CSGlobal` : 'CSGlobal';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="CSGlobal" />
      <meta property="og:url" content={`${canonical}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="CSGlobal" />
      <meta name="twitter:creator" content="Marcos Renê" />
      <meta
        property="og:image"
        content={
          image ||
          'https://www.propernoun.co/static/images/proper-noun-social.png'
        }
      />
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <link rel="icon" type="image/x-ico" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
    </Head>
  );
};

export default MetaTags;
