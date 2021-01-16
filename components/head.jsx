import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription =
  'We are a team of UIUC students who create robust software for social good. We believe that our engineering skill sets do not render us useless in addressing social injustices. Instead, they empower us to build a better society together.';
const defaultOGURL = 'uiuc.hack4impact.org';
const defaultOGImage = '/icons/favicon-32x32.png';

const Head = ({ title, description, url, ogImage }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title ?? 'Hack4Impact UIUC'}</title>
    <meta name="description" content={description ?? defaultDescription} />
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124593378-1" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="apple-touch-icon" sizes="200x200" href="/icons/favicon-200.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="100x100" href="/icons/favicon-100.png" />

    <link rel="stylesheet" type="text/css" href="/style.css" />
    <link rel="stylesheet" type="text/css" href="/react-toast.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossOrigin="anonymous"
    />
    {(title === 'H4I Apply | Nonprofits' || title === 'H4I Apply | Students') && (
      <link rel="stylesheet" href="/react-vertical.min.css" />
    )}

    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <meta property="og:url" content={url ?? defaultOGURL} />
    <meta property="og:title" content={title ?? ''} />
    <meta property="og:description" content={description ?? defaultDescription} />
    <meta name="twitter:site" content={url ?? defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage ?? defaultOGImage} />
    <meta property="og:image" content={ogImage ?? defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
