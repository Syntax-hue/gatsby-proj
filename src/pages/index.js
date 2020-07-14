import React from "react"
import '../styles/index.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Form from "./.form"
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
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
        <img className="fonImg" src={allImages['fon']} />
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
              <img src={allImages['Fabrica_de_mezeluri']}/>
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
              <img src={allImages['Fabrica_de_mezeluri']}/>
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
          <div>
            {(document.documentElement.clientWidth < 500) ? 
            <img className="fonImg" src={allImages['fon2']} />
            :
            <img className="fonImg" src={allImages['fon2-1']} />
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
          <img className="despre_img" src={allImages['fon3']}/>
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
                  <img src={allImages['circle_gal']}/>
                </span>
                Locul de muncă este direct de la Angajatorul din Germania
              </div>
              <div className="despre_info__list_item">
                <span>
                  <img src={allImages['circle_gal']}/>
                </span>
                Candidatul cunoaște salariul înainte de plecare (Abrechnung)
              </div>
              <div className="despre_info__list_item">
                <span>
                  <img src={allImages['circle_gal']}/>
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
                <img src={[allImages['phone_1']]}/>
              </div>
              <div className="contacts__list__item_data">
                APELAȚI-NE <br/>
                +373 22 211 808
              </div>
            </div>
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img style={{marginLeft: 1}} src={[allImages['mark_1']]}/>
              </div>
              <div className="contacts__list__item_data">
                Chișinău, <br/>
                str. Vasile Alecsandri 129, of.16
              </div>
            </div>
            <div className="contacts__list__item">
              <div className="contacts__list__item__logo">
                <img style={{marginLeft: 1.5}} src={[allImages['mail_1']]}/>
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
