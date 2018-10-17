import { createGlobalStyle } from 'styled-components'

import resetStyles from '../vendor/reset'
import typogrophySettings from '../config/typography'
import spacingSettings from '../config/spacing'

const GlobalStyles = createGlobalStyle`
  ${resetStyles}

  @font-face {
    font-family: 'basiercircle-regular';
    src: url(${require('../../../assets/font/basier/basiercircle-regular-webfont.woff')}) format('woff'),
         url(${require('../../../assets/font/basier/basiercircle-regular-webfont.woff2')}) format('woff2')
  }

    @font-face {
    font-family: 'basiercircle-bold';
    src: url(${require('../../../assets/font/basier/basiercircle-bold-webfont.woff')}) format('woff'),
         url(${require('../../../assets/font/basier/basiercircle-bold-webfont.woff2')}) format('woff2')
  }
  
  html,
  body {
    font-family: ${typogrophySettings.base.body.font};
    line-height: ${typogrophySettings.base.body.lineHeight};
    font-size: ${typogrophySettings.sizes.default};
  }

  body {
    background: ${p => p.theme.background};
    color: ${p => p.theme.textColor};
    transition: all 1s ease-in-out;
  }

  h1, h2, h3, h4, form legend {
    font-family: ${typogrophySettings.base.header.font};
    line-height: ${typogrophySettings.base.header.lineHeight};
    margin-bottom: ${spacingSettings.sizes.xxs};
  }

  q {
    display: inline-block;
    font-size: ${typogrophySettings.sizes.md};
    margin-bottom: ${spacingSettings.sizes.lg};
    quotes: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: ${p => p.theme.white}
    border-bottom: 1px solid ${p => p.theme.primary}
  }

  h2, h3, h4 {
    margin-top: ${spacingSettings.sizes.sm};
  }

  ul, ol, p {
    margin-bottom: ${spacingSettings.sizes.md};
  }

  h1 {
    font-size: ${typogrophySettings.sizes.xxxxl};
  }

  h2 {
    font-size: ${typogrophySettings.sizes.xxxl};
  }

  h3 {
    font-size: ${typogrophySettings.sizes.xxl};
  }

  h4 {
    font-size: ${typogrophySettings.sizes.xl};
  }

  h5 {
    font-size: ${typogrophySettings.sizes.lg};
  }
`

export default GlobalStyles
