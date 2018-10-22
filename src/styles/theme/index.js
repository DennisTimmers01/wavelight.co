import spacingSettings from './config/spacing'

const theme = {
  main: {
    primary: '#3D77EA',
    primaryLight: '#B1B1B1',
    secondary: '#2A2A2A',
    white: '#FFFFFF',
    background: '#FFFFFF',
    textColor: '#232323',
  },
  dark: {
    primary: '#3D77EA',
    primaryLight: '#B1B1B1',
    background: '#2d2d2d',
    textColor: '#FFFFFF',
    white: '#FFFFFF',
  },
  ...spacingSettings,
}

export default theme
