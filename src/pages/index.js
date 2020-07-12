import React from "react"
import '../styles/index.scss'
import {useStaticQuery, graphql} from 'gatsby'



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
  data.allFile.edges.map(({node}) => {
    allImages[node.name] = node.publicURL
  })

  return (
  <div className="bigContiner">
    <header>
      <div className="headerLineTop">
        <div className="continer d-f f-between">
          <div className="d-f connectBlock">
            <div className="phoneBlock">
              <img src={allImages['Path_140']} alt=""/>
              <a href="tel:+37322211808">
                +373 22 211 808
              </a>
            </div>
            <div className="mailBlock">
              <img src={allImages['Path_141']} alt=""/>
              <a href="mailto:hr.legis@gmail.com">
                hr.legis@gmail.com
              </a>
            </div>
          </div>
          <div className="d-f sotialBlock">
            <a href="#" className="sotialBlock__item">
              <img src={allImages['q1']} alt=""/>
            </a>
            <a href="#" className="sotialBlock__item">
              <img src={allImages['q2']} alt=""/>
            </a>
            <a href="#" className="sotialBlock__item">
              <img src={allImages['q3']} alt=""/>
            </a>
            <a href="#" className="sotialBlock__item">
              <img src={allImages['q4']} alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div className="headerLineBottom">
        <div className="d-f f-between continer">
          <div>
            <img className="logoHeader" src={allImages['Legis_R']}/>
          </div>
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
              <button className="burger">
                <span>
                  
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  )
} 

export default IndexPage
