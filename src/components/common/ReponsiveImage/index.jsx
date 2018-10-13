import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const ResponsiveImage = ({image}) => (
  <Img fluid={image.file.childImageSharp.fluid}/>
)


ResponsiveImage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default ResponsiveImage