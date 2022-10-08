import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

export const SidebarLink = ({ url, text }) => {
    const navigate = useNavigate();
    return (
        <Link
            to={url}
            spy
            onClick={() => navigate(`#${text.toLowerCase()}`)}
            className={styles.default()}
            activeClass={styles.active()}
        >
            {text}
        </Link>
    );
}