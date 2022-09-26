import styles from "../components/app-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';



export default function About() {
    return(
        <div id="about" style={styles.aboutPages}>
            <h1 style={{lineHeight:'1px'}}> Rizky Musyaffa Fajari</h1>
            <h5> 087889370120 | ampunkk11@gmail.com</h5>
            <p>Saya merupakan seorang mahasiswa semester 7 di Fakultas Ilmu Komputer Universitas Indonesia.</p>
            <a href="https://www.instagram.com/zorbax_/?hl=id" style={{color:'inherit'}}><FontAwesomeIcon icon={faInstagram} size="xl"/></a>&nbsp;
            <a href="https://www.discordapp.com/users/320767680552370177" style={{color:'inherit'}}><FontAwesomeIcon icon={faDiscord} size="xl"/></a>
            
        </div>
    )
}