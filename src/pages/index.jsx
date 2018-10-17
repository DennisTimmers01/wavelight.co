import React from 'react'

import Layout from '../components/layout'
import Container from '../components/common/Container/styled'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PageTitle from '../components/common/PageTitle'
import Intro from '../components/common/Intro'
import Button from '../components/common/Button'
import List from '../components/common/List'
import Column from '../components/common/Container/Column/styled'
import Title from '../components/common/Title'

const IndexPage = () => (
  <Layout>
    <Header paddingTop="xxl" paddingBottom="xxl">
      <PageTitle highlight=" wavelight">
        Hallo, <br /> wij zijn
      </PageTitle>
      <Intro content="En wij zijn druk bezig met onze eigen website.." />
    </Header>
    <Container as="section" paddingBottom="xxl">
      <p>
        Een digitaal bureau dat zich sterk focust op design, development en
        strategy marketing. Bij Wavelight krijg je een beetje van alles wat.
        Mooie designs, sterke concepten, rendabele campagnes en een biertje als
        afsluiter. Samen werken we aan de mooiste digitale oplossingen voor jou.
        Mooi toch?
      </p>
      <Button
        href="mailto:hello@wavelight.co"
        as="a"
        inverted
        value="Mail ons"
      />
    </Container>
    <Footer>
      <Container as="header" paddingBottom="md">
        <Title title="Laten we praten!" element="h2" />
        <Intro content="Vinden we leuk" />
      </Container>
      <Container withFlex>
        <Column columnWidth="50%">
          <List>
            <li>
              <a href="mailto:hello@wavelight.co">hello@wavelight.co</a>
            </li>
            <li>
              <a href="tel:0611451081">+31 6 11 45 10 81</a>
            </li>
          </List>
        </Column>
        <Column columnWidth="50%">
          <List>
            <li>
              <p>Weena 125</p>
            </li>
            <li>
              <p>3013 CK Rotterdam</p>
            </li>
          </List>
        </Column>
      </Container>
    </Footer>
  </Layout>
)

export default IndexPage
