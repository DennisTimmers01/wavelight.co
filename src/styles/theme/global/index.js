import { createGlobalStyle } from 'styled-components'

import resetStyles from '../vendor/reset'
import typogrophySettings from '../config/typography'
import spacingSettings from '../config/spacing'

const GlobalStyles = createGlobalStyle`
  ${resetStyles}
  
  html,
  body {
    font-family: ${typogrophySettings.base.body.font};
    line-height: ${typogrophySettings.base.body.lineHeight};
    font-size: ${typogrophySettings.sizes.default};
  }

  h1, h2, h3, h4, form legend {
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
