import React from "react";
import profileImage from "../../assets/profile-image.jpg";
import { styles } from "./styles";
import { SidebarLink } from "./SidebarLink";

export class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebarContainer()}>
        <div className={styles.bodyContainer()}>
          <div className={styles.imgContainer()}>
            <img src={profileImage} className={styles.imgStyle()} alt="icon" />
          </div>
          <SidebarLink text={"ABOUT"} url={"about"} key={"about"} />
          <SidebarLink text={"EXPERIENCE"} url={"experience"} key={"experience"} />
          <SidebarLink text={"EDUCATION"} url={"education"} key={"education"} />
          <SidebarLink text={"SKILLS"} url={"skills"} key={"skills"} />
          <SidebarLink text={"INTERESTS"} url={"interests"} key={"interests"} />
          <SidebarLink text={"AWARDS"} url={"awards"} key={"awards"} />
        </div>
      </div>
    );
  }
}