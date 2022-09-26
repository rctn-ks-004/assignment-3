import styles from "../components/app-style"

export default function Experiences() {
    return(
        <div id="experiences" style={styles.experiencePages}>
            <h1> Experience </h1>
            <div style={{display:'flex'}}> <p style={{width:'70%'}}>Mahasiswa Ilmu Komputer di Universitas Indonesia</p> <p style={{width:'30%'}}>2019 - Now</p> </div>
            <div style={{display:'flex'}}> <p style={{width:'70%'}}>Peserta dari bootcamp React & React Native di Hacktiv8</p> <p style={{width:'30%'}}>2022</p> </div>
        </div>
    )
}