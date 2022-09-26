import { Link,NavLink } from 'react-router-dom';
import styles from '../components/app-style';
import myImage from '../components/img/106532.jpg';
export default function Navbar(){

    return(
        <nav style={styles.sideBar}>
            <img style={styles.image} src={myImage}></img><br/>
            <NavLink to='/about' style={({isActive}) => (styles.textLink(isActive))} > About</NavLink><br/>
            <NavLink to='/experiences'style={({isActive}) => (styles.textLink(isActive))} > Experiences</NavLink> <br/>
            <NavLink to='/skills' style={({isActive}) => (styles.textLink(isActive))}> Skills </NavLink> <br/>
            <NavLink to='/interest' style={({isActive}) => (styles.textLink(isActive))}> Interest</NavLink> <br/>
            <NavLink to='/awards' style={({isActive}) => (styles.textLink(isActive))}> Awards</NavLink>

        </nav>
    )
}