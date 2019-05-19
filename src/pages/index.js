import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"

import profilePicture from "../images/profile.jpg"

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home | Tiago Cichelero</title>
      <link rel="canonical" href="http://tiagocichelero.com/" />
    </Helmet>
    <h1>Hello I'm Tiago!</h1>
    <img src={profilePicture} alt="Tiago Cichelero's Profile" />
  </Layout>
)
