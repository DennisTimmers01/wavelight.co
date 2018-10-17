import { calcFontSize } from './utils'

const scaleRatio = 1.25
const baseFontSize = '18px'

const typographySettings = {
  base: {
    header: {
      font: 'basiercircle-bold',
      lineHeight: 1.3,
    },
    body: {
      font: 'basiercircle-regular',
      lineHeight: 1.5,
    },
  },
  sizes: {
    default: baseFontSize,
    md: `${calcFontSize(scaleRatio, 1)}em`,
    lg: `${calcFontSize(scaleRatio, 2)}em`,
    xl: `${calcFontSize(scaleRatio, 3)}em`,
    xxl: `${calcFontSize(scaleRatio, 4)}em`,
    xxxl: `${calcFontSize(scaleRatio, 5)}em`,
    xxxxl: `${calcFontSize(scaleRatio, 6)}em`,
  },
}

export default typographySettings
