import React, { useRef } from 'react'
import {navigate} from '@reach/router'
import '../styles/form.css'


export default function Form() {
  const selectElem = useRef();
  const selectWrapElem = useRef();
  const viewFon = useRef();
  const nameField = useRef();
  const prenameField = useRef();
  const telefonField = useRef();
  const _handleClose = (e) => {
    window.removeEventListener('click', _handleClose, true)
    event.stopPropagation()
    if ((e.target.tagName !== "OPTION") || e.target === viewFon.current) {
      selectWrapElem.current.classList.toggle("selectWrap_open");
      selectElem.current.classList.toggle('select_list-open');
    }
  }
  const handleOpenMenu = () => {
    selectElem.current.classList.toggle("select_list-open");
    selectWrapElem.current.classList.toggle("selectWrap_open");
    window.addEventListener('click', _handleClose, true);
  }
  const handleCloseOption = (e) => {
    window.removeEventListener('click', _handleClose, true)
    setTimeout(() => {
      selectWrapElem.current.classList.toggle("selectWrap_open");
      selectElem.current.classList.toggle('select_list-open');
    },150);
  }
  const handleClickSelect = (e) => {
    viewFon.current.innerText = e.target.value
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch(process.env.GATSBY_SITE_STRAPI+'/forms', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameField.current.value,
        prenume: prenameField.current.value,
        telefon: telefonField.current.value,
        tip_pasaport: viewFon.current.innerText === 'Tip pașaport' ? 
          'none' : viewFon.current.innerText
      })
    })
    navigate('/thankYou');
  }
  return (
    <form className="submit_from" onSubmit={handleSubmit}>
      <h3>
        COMPLETEAZĂ FORMULARUL
      </h3>
      <div className="submit_from__userInfo">
        <input ref={nameField} placeholder="Nume" required/>
        <input ref={prenameField} placeholder="Prenume" required/>
      </div>
      <div>
        <input ref={telefonField} placeholder="Telefon de contact" required/>
      </div>
      <div
           ref={selectWrapElem} 
           className="selectWrap"
      >
        <div ref={viewFon}
             className="selectWrap_viewBlock" 
             onClick={handleOpenMenu}
        >
          Tip pașaport
        </div>
        <select className="select_list"
                ref={selectElem}
                onFocus={handleCloseOption}
                onChange={handleClickSelect}
                size={2}
        >
          <option>Moldova</option>
          <option>România</option>
        </select>
      </div>
      <div className="submit_from__button">
        <button className="orange_button">
          OBȚINE CONSULTAȚIE
        </button>
      </div>
    </form>
  )
}
