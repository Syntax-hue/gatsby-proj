import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import '../styles/index.scss'

export default function ThankYou() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          edges {
            node {
              publicURL
              name
              childImageSharp {
                fluid(maxWidth: 1980, quality: 100) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
    `
  )
  const allImages = {};
  data.allFile.edges.map(({ node }) => {
    allImages[node.name] = node.publicURL
  })
  const allImagesFluid = {};
  data.allFile.edges.map(({ node }) => {
    allImagesFluid[node.name] = node.childImageSharp && node.childImageSharp.fluid
  })

  return (
    <div className="bigContiner">
      <Helmet>
        <title>Thank You</title>
        <meta name="description" content="Thank You"/>
      </Helmet>
      <Header/>
      <section className="formBlock thankYouPageFormBlock">
        <div className="continer">
          <h1>
            Mulțumim că ați ales compania 
            Legis Recruitment, un 
            consultant&nbsp;va reveni pe parcursul 
            zilei&nbsp;cu&nbsp;un&nbsp;apel&nbsp;telefonic. 
          </h1>
          <div className="metka">
            <span></span>
          </div>
          <div className="contacts__list thankYouPageContacts">
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img src={[allImages['phone1-1']]}/>
              </div>
              <div className="contacts__list__item_data">
                APELAȚI-NE <br/>
                +373 22 211 808
              </div>
            </div>
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img style={{marginLeft: 1}} src={[allImages['mark1-1']]}/>
              </div>
              <div className="contacts__list__item_data">
                Chișinău, <br/>
                str. Vasile Alecsandri 129, of.16
              </div>
            </div>
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img style={{marginLeft: 1.5}} src={[allImages['mail1-1']]}/>
              </div>
              <div className="contacts__list__item_data">
                hr.legis@gmail.com
              </div>
            </div> 
          </div>
        </div>
        <Img className="fonImg" fluid={allImagesFluid['fon1-1']} />
      </section>
      <Footer className="thankYouPageFooter"/>
    </div>
  )
}
