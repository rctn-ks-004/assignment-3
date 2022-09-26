import styles from "../components/app-style"
import { faGamepad,faMusic,faFilm } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Interest() {
    return(
        <div id="interest" style={styles.interestPages}>
            <h1> Interest </h1>
            <p><FontAwesomeIcon icon={faGamepad} /> Vidio Game <FontAwesomeIcon icon={faGamepad} /></p>
            <p><FontAwesomeIcon icon={faMusic} /> Musik <FontAwesomeIcon icon={faMusic} /></p>
            <p><FontAwesomeIcon icon={faFilm} /> Film <FontAwesomeIcon icon={faFilm} /></p>
        </div>
    )
}