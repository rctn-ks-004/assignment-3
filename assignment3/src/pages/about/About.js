import React from "react";
import { styles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.section()} id="about">
        <div className={styles.title()}>Rafli<span style={{ color: "#AD5236" }}>Bangsawan</span></div>
        <div className={styles.contact()}>+62 822 8195 8888 <span style={{ color: "#AD5236" }}>raflibangsawans@gmail.com</span></div>
        <div className={styles.aboutText()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut augue ac neque bibendum malesuada. Mauris id quam condimentum felis imperdiet malesuada vitae convallis orci. In laoreet odio id sapien consequat congue. Maecenas purus quam, pulvinar eu leo imperdiet, gravida bibendum enim. Ut arcu lectus, auctor eget nisi vel, venenatis varius mi. Integer vel justo tortor. Nunc at mollis neque. Aenean vel tristique nulla. Nam placerat sem lectus, sed sagittis dolor feugiat at. Donec in justo nec mi volutpat feugiat. Aenean tristique nulla non sem rhoncus iaculis. Morbi leo diam, pharetra ut egestas ac, cursus pharetra lacus. Nullam maximus ipsum dui, ac mattis dolor lacinia quis.
        </div>
        <div className={styles.rowContainer()}>
          <a className={styles.iconLink()} href="https://github.com/raflibangsawan">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          </a>

          <a className={styles.iconLink()} href="https://www.linkedin.com/in/raflibangsawan/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
    )
  }
}