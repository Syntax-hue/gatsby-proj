import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.7838459724096!2d28.841017759145586!3d47.023006146168065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3743d4963f%3A0x4c3142c7dffc4d67!2sEzzup.Store!5e0!3m2!1sru!2sru!4v1594751181001!5m2!1sru!2sru" width="800" height="353" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
    <div className="footer_info">
      <div className="footer_info_top">
        <div className="footer_logo">
          <img src={allImages['footer_logo']} alt="logo"/>
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
