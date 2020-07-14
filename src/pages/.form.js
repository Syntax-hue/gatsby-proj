import React, { useRef } from 'react'
import '../styles/form.css'


export default function Form() {
  const selectElem = useRef();
  const selectWrapElem = useRef();
  const viewFon = useRef();
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
          <option>1</option>
          <option>2</option>
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
