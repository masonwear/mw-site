import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import {
  MagicScriptTag,
} from '../components/DarkModeProvider'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}