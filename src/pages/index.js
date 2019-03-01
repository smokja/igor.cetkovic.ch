import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`blog`, `application`, `react`]} />
    <h1>Hi people</h1>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     <p>This page is still under construction. </p>
     <p>
        Later on, this page will be used as a blog and a homepage. You can
       follow the development along on <a href="https://github.com/smokja/igor.cetkovic.ch">Github</a>. 
     </p>
     <p>
       While you're here you can check out these other websites:
       <p><a href="https://staging.pascalluginbuehl.ch/">Pascal Luginbuehl</a></p>
       <p><a href="https://leonardschuetz.ch/blog">Leonard Schuetz</a></p>
     </p>
    </div>
  </Layout>
)

export default IndexPage
