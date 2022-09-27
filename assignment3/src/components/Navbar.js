import logo from "../utils/assets/profile.jpg";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

const Navbar = ({ categories }) => {
  const scrollToCategory = (id) => {
    id.current?.scrollIntoView({ inline: "center" });
  };

  return (
    <div style={styles.container}>
      <img src={logo} alt="profile" style={styles.img} />
      <nav style={styles.flex}>
        {categories.map((category) => (
          <Link
            key={category.id}
            className="link"
            // to={`/${category.name}`}
            to={category.id.toString()}
            activeClass="activeCategory"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => scrollToCategory(category.id)}
          >
            {category.name.toUpperCase()}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#E14D2A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "20%",
    height: "100vh",
    fontSize: "20px",
    position: "fixed",
  },
  img: {
    border: "10px solid #FD841F",
    borderRadius: "50%",
    width: "50%",
    margin: "10px",
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "40%",
  },
};

export default Navbar;
