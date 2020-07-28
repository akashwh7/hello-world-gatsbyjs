import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h2>I am Akash, a fullstack engineer.</h2>
      <p>Need a developer? <a href="/contact">Conatct me using anchor</a></p>
      <p>Need a developer> <Link to="/contact">Contact me using Link</Link></p>
    </Layout>
  )
}


export default IndexPage