import routes from "../../utils/routes";
import { AsideContainer, ImgCustom, LinkCustom } from "./styles";

export default function AsideNav() {
  return (
    <AsideContainer>
      <ImgCustom
        src="https://media-exp1.licdn.com/dms/image/C5603AQG9G2qxeC2rrw/profile-displayphoto-shrink_800_800/0/1661880299272?e=1669852800&v=beta&t=u2XaKO7Don20-23xg4ay-G_4NZNKMqHbEsNF835Sg1s"
        alt="profile-image"
      />
      {routes.map((link) => (
        <LinkCustom
          to={link.link}
          spy
          smooth
          delay={50}
          duration={100}
          activeClass="active"
        >
          {link.label}
        </LinkCustom>
      ))}
    </AsideContainer>
  );
}
