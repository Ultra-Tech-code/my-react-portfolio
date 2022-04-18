// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
import logo from "../images/logo.svg";

const About = ({githubUrl, name, link, bio, twitter }) => {

  const socialData = {
    githubUrl: githubUrl,
    link: link,
    twitter: twitter,
  };

  return (
    <header id="about" className="d-flex flex-column min-vh-100 justify-content-center" >
      <NavBar />
      <div className="container text-center">
        <img
          className="logo spin img-fluid"
          src={logo}
          alt="React Logo"
          height="45%"
          width="45%"
        />
        <h2>{name}</h2>
        <hr />
        <p>{bio}</p>
        <SocialLinks {...socialData} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
