import React from "react"
import '../styles/index.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Form from "./.form"
import Header from "../components/header"
import Footer from "../components/footer"
import {Helmet} from "react-helmet";
import Img from 'gatsby-image'

var globalThis = globalThis | {};

const IndexPage = () => {
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
  console.log(allImagesFluid)
  return (
    <div className="bigContiner">
      <Helmet>
        <title>Plecările legale în Europa sînt în baza Pașaportului European</title>
        <meta name="description" content="Muncă legal în Europa. Plecările legale în Europa"/>
      </Helmet>
      <Header />
      <section className="formBlock">
        <div className="continer">
          <h1>
            Aveți nevoie de un loc de&nbsp;muncă&nbsp;legal&nbsp;în&nbsp;Europa?
          </h1>
          <h2>
            Plecările legale în Europa sînt în baza&nbsp;Pașaportului&nbsp;European
          </h2>
          <Form />
        </div>
        <Img className="fonImg" fluid={allImagesFluid['fon']} alt="work"/>
      </section>
      <section className="jobsBlock">
        <div className="continer">
          <div className="block_section_header">
            <h3>
            Oferte și salarii minime garantate
            </h3>
            <p>
              Colaborăm doar cu parteneri de încredere  din Europa
            </p>
            <div className="metka">
              <span></span>
            </div>
          </div>
          <div className="jobsBlock_list">
            <div className="jobsBlock_list__item">
              <Img className="jobsBlock_list__item_img" fluid={allImagesFluid['Fabrica_de_mezeluri']} alt="work fon"/>
              <div className="jobsBlock_list__item__info">
                <h5>
                  Fabrica de mezeluri
                </h5>
                <div className="jobsBlock_list__item__desc">
                  Lucrător secția producere și ambalare <br/>
                  Salariu: <span> de la 1624 EUR brut/lună </span> <br/>
                  Bărbați / Femei/Cupluri <br/>
                  Vârsta: 20-50 ani <br/>
                  Orele de muncă: 160-190 ore/lună <br/>
                  Cazare și transport la serviciu oferit de angajator <br/>
                </div>
                <button className="orange_button">
                  TRIMITE SOLICITARE
                </button>
              </div>
            </div>
            <div className="jobsBlock_list__item">
              <Img className="jobsBlock_list__item_img" fluid={allImagesFluid['Fabrica_de_mezeluri']} alt="work fon"/>
              <div className="jobsBlock_list__item__info">
                <h5>
                  Fabrica de mezeluri
                </h5>
                <div className="jobsBlock_list__item__desc">
                  Lucrător secția producere și ambalare <br/>
                  Salariu: <span> de la 1624 EUR brut/lună </span> <br/>
                  Bărbați / Femei/Cupluri <br/>
                  Vârsta: 20-50 ani <br/>
                  Orele de muncă: 160-190 ore/lună <br/>
                  Cazare și transport la serviciu oferit de angajator <br/>
                </div>
                <button className="orange_button">
                  TRIMITE SOLICITARE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="angajeaza">
        <div className="continer angajeaza_info">
          <div style={{width: '100%'}}>
            {(globalThis.window ? globalThis.window.innerWidth < 500 ? true : false : true) ? 
            <Img className="fonImg" fluid={allImagesFluid['fon2']} />
            :
            <Img className="fonImg" fluid={allImagesFluid['fon2-1']} />
            }
          </div>
          <h3>
            Angajează-te în Germania
            cu Legis Recruitment
            și&nbsp;vei primi garantat 
            impozitele înapoi!
          </h3>
          <div>
            <button className="orange_button">
              RETURNARE IMPOZITE
            </button>
          </div>
        </div>
      </section>
      <section className="despre">
        <div className="continer">
          <Img className="despre_img" fluid={allImagesFluid['fon3']} alt="handshake"/>
          <div className="despre_info">
            <h3>
              Despre noi
            </h3>
            <p>
              Legis Recruitment este o companie de recrutare, care oferă locuri de muncă în Uniunea Europeană. Toate ofertele sunt sigure, au fost verificate personal de managerii companiei. 
            </p>
            <p>
              AVANTAJELE NOASTRE: 
            </p>
            <div className="despre_info__list">
              <div className="despre_info__list_item">
                <span>
                  <img src={allImages['circle_gal']} alt=""/>
                </span>
                Locul de muncă este direct de la Angajatorul din Germania
              </div>
              <div className="despre_info__list_item">
                <span>
                  <img src={allImages['circle_gal']} alt=""/>
                </span>
                Candidatul cunoaște salariul înainte de plecare (Abrechnung)
              </div>
              <div className="despre_info__list_item">
                <span>
                  <img src={allImages['circle_gal']} alt=""/>
                </span>
                Disponibilitate non-stop și intervenția obligatorie în soluționarea problemelor.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contacts">
        <div className="continer">
          <div className="block_section_header">
            <h3>
            Contactele noastre
            </h3>
            <p>
            Pentru mai multe informaţii
            </p>
            <div className="metka">
              <span></span>
            </div>
          </div>
          <div className="contacts__list">
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img src={[allImages['phone_1']]} alt="phone"/>
              </div>
              <div className="contacts__list__item_data">
                APELAȚI-NE <br/>
                +373 22 211 808
              </div>
            </div>
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img style={{marginLeft: 1}} src={[allImages['mark_1']]} alt="mark"/>
              </div>
              <div className="contacts__list__item_data">
                Chișinău, <br/>
                str. Vasile Alecsandri 129, of.16
              </div>
            </div>
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img style={{marginLeft: 1.5}} src={[allImages['mail_1']]} alt="mail"/>
              </div>
              <div className="contacts__list__item_data">
                hr.legis@gmail.com
              </div>
            </div> 
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default IndexPage
