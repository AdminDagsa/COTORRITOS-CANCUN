import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import us from "../images/us.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Menu() {
  return (
    <section className="menu-area">
      <div className="menu-div">
        <Link className="link-button" to="/alimentos">
          <button className="menu-button">Menú</button>
        </Link>
        <Link className="link-button" to="/mariscos">
          <button className="menu-button">Mariscos</button>
        </Link>
        <Link className="link-button" to="/bebidas">
          <button className="menu-button">Bebidas</button>
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
          <Link className="link-img" to="/en">
            <img className="menu-img" alt="" src={us} />
          </Link>
        </div>
      </div>
    </section>
  )
}
