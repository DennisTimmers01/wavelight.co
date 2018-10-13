import React from 'react'

import Layout from '../components/layout'
import Container from '../components/common/Container/styled'
import Header from '../components/common/Header'
import PageTitle from '../components/common/PageTitle'
import Intro from '../components/common/Intro'
// import ResponsiveImage from '../components/common/ReponsiveImage'
import ImageWrapper from '../components/common/ImageWrapper/styled'
import Button from '../components/common/Button/'
import CasePreview from '../components/common/CasePreview'

const IndexPage = ({data}) => {
  const casePreviewData = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Header paddingTop="xxxl" paddingBottom="xxxl" >
        <PageTitle 
          title="Wij zijn "
          highlight="Wavelight,"
        />
        <Intro content="en hier kan je zien wat we doen,
        kunnen en most of all leuk vinden." />
      </Header>
      <ImageWrapper imageSize="60%">
        {/* <ResponsiveImage image={data}/> */}
      </ImageWrapper>
      <Container as="section" paddingTop="xxxl" paddingBottom="xxxl">
        <q>Jong, creatief, ambitieus en flexibel.
        Dat zijn wij, wavelight. Een creative studio met 3 verschillende dicipline
        Design, Development & Marketing</q>
        <Button value="Mail ons!"/>
        <p>Please…vinden we leuk</p>
      </Container>
      <CasePreview data={casePreviewData} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
          }
          htmlAst
        }
      }
    }
  }
`

export default IndexPage