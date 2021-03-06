import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import mx from "../images/mx.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Menu_en() {
  return (
    <section className="menu-area">
      <div className="menu-div">
        <Link className="link-button" to="/dishes">
          <button className="menu-button">Menu</button>
        </Link>
        <Link className="link-button" to="/seafood">
          <button className="menu-button">Seafood</button>
        </Link>
        <Link className="link-button" to="/drinks">
          <button className="menu-button">Drinks</button>
        </Link>
        <div className="grid-container-icons">
          <Link
            className="link-scl"
            to="https://www.facebook.com/cotorritoscdmx"
            target="_blank"
          >
            <img className="menu-scl" alt="" src={fb} />
          </Link>
          <Link
            className="link-scl"
            to="https://www.instagram.com/cotorritos_cdmx"
            target="_blank"
          >
            <img className="menu-scl" alt="" src={ins} />
          </Link>
          <div></div>
          <Link className="link-img" to="/">
            <img className="menu-img" alt="" src={mx} />
          </Link>
        </div>
      </div>
    </section>
  )
}
