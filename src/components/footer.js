import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Footer(props) {
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
    <footer className={props.className}>
    <div className="footer_map">

    </div>
    <div className="footer_info">
      <div className="footer_info_top">
        <div className="footer_logo">
          <img src={allImages['footer_logo']}/>
        </div>
        <p>
          Legis Recruitment este o companie de recrutare  care oferă locuri de muncă în Europa.
        </p>
      </div>
      <div className={"continer footer_info_bottom"}>
        <div className="d-f sotialBlock">
          <a href="#" className="sotialBlock__item">
            <img src={allImages['q4']} alt="" />
          </a>
          <a href="#" className="sotialBlock__item">
            <img src={allImages['q3']} alt="" />
          </a>
          <a href="#" className="sotialBlock__item">
            <img src={allImages['q5']} alt="" />
          </a>
          <a href="#" className="sotialBlock__item">
            <img src={allImages['q1']} alt="" />
          </a>
          <a href="#" className="sotialBlock__item">
            <img src={allImages['q6']} alt="" />
          </a>
        </div>
        <div className="footer_info_bottom_text">
          © 2020 Legis-R, All rights reserved.
        </div>
      </div>
    </div>
  </footer>
  )
}
