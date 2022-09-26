import styles from "../components/app-style"
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Skills() {
    return(
        <div id="skills" style={styles.skillsPages}>
            <h1> Skills </h1>
            <p> Mempelajari beberapa bahasa pemrograman seperti: </p>
            <p> <FontAwesomeIcon icon={faCheck} size="lg"/> HTML & CSS </p>
            <p> <FontAwesomeIcon icon={faCheck} size="lg"/> Java </p>
            <p> <FontAwesomeIcon icon={faCheck} size="lg"/> Python </p>
            <p> <FontAwesomeIcon icon={faCheck} size="lg"/> JavaScript </p>
        </div>
    )
}