import SocialLinks from "./SocialLinks";

const Footer = ({ githubUrl, link, twitter }) => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
      <SocialLinks githubUrl={githubUrl} link={link} twitter={twitter} />
      <p className="lead my-3 text-white">
        &copy;{" "}
        <a
          id="myInfo"
          href="https://github.com/Ultra-tech-code/my-react-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Ultra-tech-code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
