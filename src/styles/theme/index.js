import spacingSettings from './config/spacing'

const theme = {
  main: {
    primary: '#3D77EA',
    primaryLight: '#B1B1B1',
    secondary: '#2A2A2A',
    white: '#FFFFFF',
    background: '#FFFFFF',
    textColor: '#000000',
  },
  dark: {
    primary: '#3D77EA',
    primaryLight: '#B1B1B1',
    background: '#31313a',
    textColor: '#FFFFFF',
    white: '#FFFFFF',
  },
  ...spacingSettings,
}

export default theme
