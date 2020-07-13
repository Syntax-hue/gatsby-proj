import React, { useRef } from 'react'
import '../styles/form.css'

export default function Form() {
  const selectElem = useRef();
  const selectWrapElem = useRef();
  const handleOpenMenu = () => {
    selectWrapElem.current.classList.toggle('selectWrap_open');
    const changeClass = (e) => {
      selectWrapElem.current.classList.toggle('selectWrap_open');
      selectElem.current.blur();
      window.removeEventListener('click', changeClass, false)
    }
    window.addEventListener('click', changeClass, false)
  }

  return (
    <form className="submit_from">
      <h3>
        COMPLETEAZĂ FORMULARUL
      </h3>
      <div className="submit_from__userInfo">
        <input placeholder="name"/>
        <input placeholder="Prenume"/>
      </div>
      <div>
        <input placeholder="Telefon de contact"/>
      </div>
      <div ref={selectWrapElem} className="selectWrap" tabIndex="0">
        <select onFocus={handleOpenMenu}
                ref={selectElem} 
                defaultValue="Tip pașaport">
          <option>1</option>
          <option>2</option>
          <option style={{display: 'none'}} value="Tip pașaport">Tip pașaport</option>
        </select>
      </div>
      <div className="submit_from__button">
        <button type="button" className="orange_button">
          OBȚINE CONSULTAȚIE
        </button>
      </div>
    </form>
  )
}
