import React from 'react'
import { Link } from 'gatsby'

import Container from '../Container/styled'
import Header from '../CasePreviewHeader/styled'
import Button from '../Button'
import Title from '../Title'
import CasePreviewImages from '../CasePreviewImages'
import foregroundImage from '../../../images/foreground.png'
import backgroundImage from '../../../images/background.png'

const CasePreview = ({data}) => {
  console.log()
  return (
    <Container as="section">
      {data.map(content => (
        <div key={content.node.id}>
          <Header>
            <Title 
              title={content.node.frontmatter.title}
              subTitle={content.node.frontmatter.subtitle}
              element="h2"
              withSubtitle
            />
          </Header>
          <p>{content.node.excerpt}</p>
          <Button as={Link} to="/" value="Bekijk project" />
          <CasePreviewImages background={backgroundImage} foreground={foregroundImage}/>
        </div>
      ))}
    </Container>
  )
}

export default CasePreview
