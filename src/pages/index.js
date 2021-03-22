import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Footer from "../components/footer"
import "../css/style.css"

const IndexPage = () => (
  <>
    <SEO title="Menú" />
    <Menu />
    <div className="footer-1">
      <Footer />
    </div>
  </>
)

export default IndexPage
