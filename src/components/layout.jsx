import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/theme/global'
import theme from '../styles/theme'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
        <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
          <GlobalStyles />
          <div>{children}</div>
          </>
        </ThemeProvider>    
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
