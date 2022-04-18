// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

// Projects Images (add your images to the /assets/images directory and import below)
import project1 from "./assets/images/project1.jpeg";
import project2 from "./assets/images/project2.jpg";
import project3 from "./assets/images/project3.jpg";

/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUsername = "Ultra-tech-code";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 6,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "web3bridge_project1",
  "web3bridge_project2",
  "web3bridge_project3"
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: project1,
  },
  {
    image: project2,
  },
  {
    image: project3,
  },
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "Hizick27@gmail.com",
  phone: "+2349030769242",
};



