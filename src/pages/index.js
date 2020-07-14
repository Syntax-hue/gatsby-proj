import React, { useRef } from "react"
import '../styles/index.scss'
import { useStaticQuery, graphql } from 'gatsby'
import Form from "./.form"



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

  const blockMenu = useRef();
  const btnMenu = useRef();
  const handleOpenMenu = (e) => {
    btnMenu.current.classList.toggle('burger-open')
    blockMenu.current.classList.toggle('linksBlockMobileMenu_open')
  }

  return (
    <div className="bigContiner">
      <header>
        <div ref={blockMenu} className="d-f f-al-center continer linksBlock linksBlockMobileMenu">
          <div className="d-f f-between linksBlock__links">
            <a href="#">
              Locuri vacante
            </a>
            <a href="#">
              Despre noi
            </a>
            <a href="#">
              Contacte
            </a>
          </div>
          <div className="d-f linksBlock__buttons">
            <button className="orange_button">
              Licența
          </button>
            <button className="orange_button">
              RETURNARE IMPOZITE
          </button>
          </div>
        </div>
        <div className="headerLineTop">
          <div className="continer d-f f-between">
            <div className="d-f connectBlock">
              <div className="phoneBlock">
                <img src={allImages['Path_140']} alt="" />
                <a href="tel:+37322211808">
                  +373 22 211 808
                </a>
              </div>
              <div className="mailBlock">
                <img src={allImages['Path_141']} alt="" />
                <a href="mailto:hr.legis@gmail.com">
                  hr.legis@gmail.com
              </a>
              </div>
            </div>
            <div className="d-f sotialBlock">
              <a href="#" className="sotialBlock__item">
                <img src={allImages['q1']} alt="" />
              </a>
              <a href="#" className="sotialBlock__item">
                <img src={allImages['q2']} alt="" />
              </a>
              <a href="#" className="sotialBlock__item">
                <img src={allImages['q3']} alt="" />
              </a>
              <a href="#" className="sotialBlock__item">
                <img src={allImages['q4']} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="headerLineBottom">
          <div className="d-f f-between continer">
            <img className="logoHeader" src={allImages['Legis_R']} />
            <div className="d-f f-al-center linksBlock">
              <div className="d-f f-between linksBlock__links">
                <a href="#">
                  Locuri vacante
                </a>
                <a href="#">
                  Despre noi
                </a>
                <a href="#">
                  Contacte
                </a>
              </div>
              <div className="d-f linksBlock__buttons">
                <button className="orange_button">
                  Licența
                </button>
                <button className="orange_button">
                  RETURNARE IMPOZITE
                </button>
                <button ref={btnMenu} onClick={handleOpenMenu} className="burger">
                  <span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
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
    </div>
  )
}

export default IndexPage
