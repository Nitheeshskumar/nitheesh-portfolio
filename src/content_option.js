import Testgenr from "./assets/images/testgenrlogo.png";
import pettamo from "./assets/images/pettamologo.png";
import gmaps from "./assets/images/gmappluginlogo.png";
import bakerbees from "./assets/images/bakerbeelogo.png";
import profilepic from "./assets/images/profilepic.jpeg";

const logotext = "Nitheesh";
const meta = {
  title: "Nitheesh S Kumar",
  description: "I’m Nitheesh S Kumar Full stack devloper,currently working in Envestnet",
};

const introdata = {
  title: "I’m Nitheesh S Kumar",
  animated: {
    first: "I love coding",
    second: "I design and develop Webapps",
    third: "I love cloud",
  },
  description:
    "Senior Software Engineer passionate about building scalable and efficient solutions and enjoy working on projects that challenge me to think outside the box",
  your_img_url: profilepic,
};

const dataabout = {
  title: "A bit about me",
  aboutme:
    "I have 5 years of experience building webapps for B2B and enterprise businesses using React and Node. I have worked on Financial, supply chain and CRM domains. Outside job, my fun includes trekking and hackathons.",
};
const worktimeline = [
  {
    jobtitle: "Associate Lead Engineer",
    where: "Envestnet",
    date: "2023-Present",
  },
  {
    jobtitle: "Senior Engineer",
    where: "Envestnet",
    date: "2022-2023",
  },
  {
    jobtitle: "Software Engineer",
    where: "InApp Information Technologies",
    date: "2019-2021",
  },
];

const skills = [
  {
    name: "React",
    value: 90,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "Unit testing",
    value: 80,
  },
  {
    name: "AWS, Node",
    value: 50,
  },
  {
    name: "Java, Python",
    value: 25,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description: "Developing responsive UI designs using Figma",
  },
  {
    title: "Web Apps",
    description: "Design and development of SPA Webapps using React and backend in Node",
  },
  {
    title: "AWS Serverless",
    description: "Develop microservices using lambda and integrating with other serverless services",
  },
];

const dataportfolio = [
  {
    img: Testgenr,
    description: "Automatic testcase generator for jira stories- Atlassian Marketplace app.",
    link: "https://github.com/Nitheeshskumar/TestGenR-ai",
  },
  {
    img: gmaps,
    description: "React wrapper for Google Maps javascript sdk with utility functions.",
    link: "https://github.com/Nitheeshskumar/react-gmap-plugin",
  },
  {
    img: pettamo,
    description: "Petcare solutions marketplace for providers and customers.",
    link: "https://github.com/Nitheeshskumar/pettamo-mvp",
  },
  {
    img: bakerbees,
    description: "Ecommerce app (in Vue js) for Multiple categories under same business.",
    link: "https://github.com/Nitheeshskumar/BakerbeeCart",
  },
];

const contactConfig = {
  YOUR_EMAIL: "nitheesh.s.k1710@gmail.com",
  YOUR_FONE: "+91 9746485532",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_w0691tq",
  YOUR_TEMPLATE_ID: "template_qmj4dpl",
  YOUR_USER_ID: "x08Iheqe-2VLaSPur",
};

const socialprofils = {
  github: "https://github.com/Nitheeshskumar",
  //   facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/nitheesh-s-kumar/",
  //   twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
