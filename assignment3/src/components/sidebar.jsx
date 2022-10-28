import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAward, faClock, faComputer, faHome, faMusic, faSchool, faUser} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import { children } from "react";
import foto from '../images/mee.jpeg';



const Sidebar = ({children}) => {
    const menuItem =[
        {
            path: "/about",
            name: "About",
            icon: <FontAwesomeIcon icon={faUser} />
        },
        {
            path: "/experience",
            name: "Experience",
            icon: <FontAwesomeIcon icon={faClock} />
        },
        {
            path: "/education",
            name: "Education",
            icon: <FontAwesomeIcon icon={faSchool} />
        },
        {
            path: "/skills",
            name: "Skills",
            icon: <FontAwesomeIcon icon={faComputer} />
        },
        {
            path: "/interest",
            name: "Interest",
            icon: <FontAwesomeIcon icon={faMusic} />
        },
        {
            path: "/awards",
            name: "Awards",
            icon: <FontAwesomeIcon icon={faAward} />
        }
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="topsection">
                    <h2>Luthfika Anggit Verdiani</h2>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName= "active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}

export default Sidebar;