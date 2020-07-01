import App, { Container } from 'next/app';
import React from 'react';
import { DefaultSeo } from 'next-seo';
import { Helmet } from 'react-helmet';
import Fathom from '../components/Fathom'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
          <Fathom>  </Fathom>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://masonwear.co',
            site_name: 'Mason Wear - Maker of Things',
            images: [
                {
                    url: 'https://masonwear.com/static/og-image.png',
                    alt: 'Mason Wear',
                },

            ],
          }}
          twitter={{
            handle: '@masondwear',
            site: '@masondwear',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      
        <Helmet>
          <title>Mason Wear - Maker of Things</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@700&display=swap" rel="stylesheet" />
          
          
      
          
          </Helmet>
       
      
      </Container>


    );
  }
}