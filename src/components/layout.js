import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import contentStyles from './layout.module.scss'
import containerStyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className={containerStyles.container}>
            <div className={contentStyles.content}>
                <Header />
                {props.children}
            
            </div>
            <Footer />
        </div>
        
    )
}

export default Layout