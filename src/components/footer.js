import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const footerdata = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    
    `)
    return (
        <footer>
            <p>Created by {footerdata.site.siteMetadata.author}. All rights reserved. ©2020</p>
        </footer>
    )
}

export default Footer