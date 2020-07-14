import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useStaticQuery, graphql } from 'gatsby'
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

  return (
    <div className="bigContiner">
      <Header/>
      <section className="formBlock thankYouPageFormBlock">
        <div className="continer">
          <h2>
            Mulțumim că ați ales compania Legis Recruitment, un 
            consultant va reveni pe parcursul zilei cu un apel telefonic.
          </h2>
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
        <img className="fonImg" src={allImages['fon1-1']} />
      </section>
      <Footer className="thankYouPageFooter"/>
    </div>
  )
}
