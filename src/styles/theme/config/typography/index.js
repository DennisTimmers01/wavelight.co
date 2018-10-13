const scaleRatio = 1.3
const baseFontSize = '16px'

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
    md: `${1 * scaleRatio}em`,
    lg: `${1 * scaleRatio * scaleRatio}em`,
    xl: `${1 * scaleRatio * scaleRatio * scaleRatio}em`,
    xxl: `${1 * scaleRatio * scaleRatio * scaleRatio}em`,
    xxxl: `${1 * scaleRatio * scaleRatio * scaleRatio * scaleRatio}em`,
    xxxxl: `${1 *
      scaleRatio *
      scaleRatio *
      scaleRatio *
      scaleRatio *
      scaleRatio}em`,
  },
}

export default typographySettings
