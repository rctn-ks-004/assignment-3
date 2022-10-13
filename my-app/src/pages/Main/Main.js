import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, About, Skills, Education, Experience, Contacts } from '../../components'
import { headerData } from '../../data/headerData'


function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <About />
            <Education />
            <Skills />
            <Experience />
            <Contacts />
        </div>
    )
}

export default Main
