"use client";
import React from "react";
import Nav from "@/components/Nav";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
import { TypeAnimation } from "react-type-animation";
import { Image } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Button,
} from "@nextui-org/react";
import { Tooltip } from "react-tooltip";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { Snippet } from "@nextui-org/react";
import "@/style/style.css";
import { SiGmail } from "react-icons/si";

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <ShootingStars />
      <StarsBackground />
      <main className="h-screen overflow-hidden">
        <div className="w-full h-screen overflow-scroll overflow-x-hidden relative scroll-smooth">
          <Nav />
          <div
            className="w-full flex justify-center items-center mt-40 flex-row p-5 relative"
            id="About"
          >
            <div className="w-full home flex lg:flex-row flex-col lg:justify-center items-center">
              <div className="w-full lg:w-1/2 flex flex-col">
                <label className="text-4xl font-bold text-start">
                  Hello, I am
                </label>
                <br />
                <label className="text-6xl font-bold text-start">
                  Hirusha Liyanage.
                </label>
                <br />
                <label className="text-3xl font-bold">
                  I am a{" "}
                  <TypeAnimation
                    className="text-4xl font-bold"
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      " Full Stack Developer.",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      " UI/UX Designer.",
                      1000,
                      " Front End Developer.",
                      1000,
                      " Programmer.",
                      1000,
                    ]}
                    wrapper="label"
                    speed={50}
                    style={{ display: "inline-block", color: "blueviolet" }}
                    repeat={Infinity}
                  />
                </label>
                <br />
                <p className="w-full xl:w-full text-gray-500 text-justify">
                  Welcome to my portfolio! I am Hirusha Liyanage and I am a
                  passionate software engineer with a keen interest in
                  programming languages. I am working as a Full Stack Sofware
                  Enginner at Nova Script Solutions(NSS) and I am there in the
                  director board of&nbsp;
                  <a
                    href="https://novascriptsolutions.com/"
                    target="_blank"
                    className="font-normal"
                    style={{ color: "blueviolet" }}
                  >
                    NSS
                  </a>
                  &nbsp;and the Director of Finance. I started programing and
                  UI/UX Desgining in 2021.
                  <a
                    href="#Projects"
                    className="font-bold"
                    style={{ color: "blueviolet" }}
                  >
                    Learn More.
                  </a>
                </p>
                <div className="w-full flex mt-5 justify-center">
                  {/* <a href=""></a> */}
                  {/* <Button
                as={Link}
                href="/assets/Resume.pdf"
                target="_blank"
                style={{ backgroundColor: "blueviolet" }}
                className="w-full lg:w-1/2"
              >
                <HiOutlineDocumentText  size={18} />
                Check Resume
              </Button> */}
                  <a
                    href="/assets/Resume.pdf"
                    target="_blank"
                    className="w-full lg:w-1/2 rounded-xl p-2 flex justify-center items-center gap-1 font-normal"
                    style={{ backgroundColor: "blueviolet" }}
                  >
                    <HiOutlineDocumentText size={18} />
                    Check Resume
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center">
                <Image
                  height={300}
                  src="profile.jpg"
                  alt="NextUI Album Cover"
                  className="rounded-full h-44 lg:h-80 profileimg m-5 -z-0"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center mt-40 flex-row p-5 relative"
            id="Skills"
          >
            <div className="w-full flex flex-col items-center">
              <label className="text-4xl font-bold text-start">Skills</label>
              <p className="text-base mt-2 text-center">
                Here are some of my skills on which I have been working
              </p>
              <div className="w-full home flex lg:flex-row flex-wrap gap-3 mt-5 justify-center">
                <Tooltip id="my-tooltip" />

                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="HTML"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="html.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="CSS"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="css.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Bootstrap"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="boots.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Javascript"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="js.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="PHP"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="php.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Java"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="java.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Next Js"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="next.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Figma"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="figma.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Arduino"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="ar.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="React Native"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="react.svg" height={50} width={50} />
                </label>
                <label
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Tailwind CSS"
                  className="bg-black border border-gray-800 p-4 rounded-2xl flex items-center h-24"
                >
                  <img src="tail.svg" height={50} width={50} />
                </label>
              </div>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center mt-40 flex-row p-5 relative"
            id="Experience"
          >
            <div className="w-full flex flex-col items-center">
              <label className="text-4xl font-bold text-start">
                Experience
              </label>
              <div className="w-full home flex flex-col lg:flex-row mt-5 items-center lg:justify-center gap-3 flex-wrap">
                <Card className="w-full lg:max-w-[400px]">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt="nextui logo"
                      height={40}
                      radius="sm"
                      src="nss.png"
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">Nova Script Solutions</p>
                      <p className="text-small text-default-500">
                        https://novascriptsolutions.com
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className="text-gray-400 text-small text-justify">
                      Nova Script Solutions (NSS) is a Software Company which is
                      started in 2023. I am a Full-Stack Developer at Nova
                      Script Solutions. I am their in the director board and I
                      am the Director of Finance in Nova Script Solutions.
                    </p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://novascriptsolutions.com/"
                    >
                      Visit Nova Script Solutions
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="w-full lg:max-w-[400px]">
                  <CardHeader className="flex gap-3">
                    <Image
                      alt="nextui logo"
                      height={40}
                      radius="sm"
                      src="ji.png"
                      width={40}
                    />
                    <div className="flex flex-col">
                      <p className="text-md">
                        Java Institute For Advanced Technology
                      </p>
                      <p className="text-small text-default-500">
                        https://www.javainstitute.edu.lk
                      </p>
                    </div>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <p className="text-gray-400 text-small text-justify">
                      Java Institute For Advanced Technology is the University
                      where I started Programming and Front End Development and
                      keep the first step for Software Enginering. It offers an
                      BSC(Hons) Degree from the UK university Birmingham City
                      university.
                    </p>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://www.javainstitute.edu.lk/"
                    >
                      Visit Java Institute For Advanced Technology
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center mt-40 flex-row p-5 relative"
            id="Projects"
          >
            <div className="w-full flex flex-col items-center">
              <label className="text-4xl font-bold text-start">Projects</label>
              <div className="w-full home flex flex-col lg:flex-row mt-5 items-center lg:justify-center gap-3 flex-wrap">
                {/* <HoverEffect items={projects} /> */}

                <Card className="w-full flex flex-col lg:flex-row rounded-2xl p-10 hover:-translate-y-2">
                  <div className="w-full lg:w-1/2 flex justify-start">
                    <img
                      src="Techland.png"
                      className="rounded-xl hover:opacity-75 lg:block hidden"
                      height={50}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex lg:items-end flex-col lg:justify-center mt-0 lg:mt-0">
                    <label
                      className="text-base"
                      style={{ color: "blueviolet" }}
                    >
                      Techland
                    </label>
                    <label
                      className="text-2xl font-bold"
                      style={{ color: "white" }}
                    >
                      Ecommerce Web Application
                    </label>
                    <p className="w-full text-base text-gray-400 text-justify lg:text-end mt-5">
                      Techland is an fully funtional Ecommerce Web Application
                      developed using HTML, CSS, Bootstrap, JavaScript, PHP and
                      MySQL Database.
                    </p>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://techland.freewebhostmost.com/home.php"
                      className="mt-5"
                    >
                      Visit Techland
                    </Link>
                  </div>
                </Card>
                <Card className="w-full flex flex-col lg:flex-row rounded-2xl p-10 hover:-translate-y-2">
                  <div className="w-full lg:w-1/2 flex lg:items-start flex-col lg:justify-center lg:mb-10 lg:mt-0">
                    <label
                      className="text-base"
                      style={{ color: "blueviolet" }}
                    >
                      Messenger
                    </label>
                    <label
                      className="text-2xl font-bold"
                      style={{ color: "white" }}
                    >
                      React Native Chat Aplication
                    </label>
                    <p className="w-full text-base text-gray-400 text-justify lg:text-start mt-5">
                      Messenger is a Chat Application users can chat each other
                      by login. It developed using React Native, PHP and MySQL
                      Database.
                    </p>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://www.youtube.com/watch?v=ZFBEL_S3ShE&t=69s&ab_channel=HirushaLiyanage"
                      className="mt-5"
                    >
                      Watch the Video
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-end">
                    <img
                      src="msg.png"
                      className="rounded-xl hover:opacity-75 lg:block hidden"
                      height={50}
                    />
                  </div>
                </Card>
                <Card className="w-full flex flex-col lg:flex-row rounded-2xl p-10 hover:-translate-y-2">
                  <div className="w-full lg:w-1/2 flex justify-start">
                    <img
                      src="ui.png"
                      className="rounded-xl hover:opacity-75 lg:block hidden"
                      height={50}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex lg:items-end flex-col lg:justify-center mt-0 lg:mt-0">
                    <label
                      className="text-base"
                      style={{ color: "blueviolet" }}
                    >
                      UI Expresses Tours
                    </label>
                    <label
                      className="text-2xl font-bold"
                      style={{ color: "white" }}
                    >
                      Responsive Website
                    </label>
                    <p className="w-full text-base text-gray-400 text-justify lg:text-end mt-5">
                      Ui Expresses Tours is a website that offers variouse
                      vehicle options for tours in Sri Lanka. This website
                      developed using HTML, CSS, Bootstrap
                    </p>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://uiexpresses.netlify.app/"
                      className="mt-5"
                    >
                      Visit UI Expresses Tours
                    </Link>
                  </div>
                </Card>
                <Card className="w-full flex flex-col lg:flex-row rounded-2xl p-10 hover:-translate-y-2">
                  <div className="w-full lg:w-1/2 flex lg:items-start flex-col lg:justify-center lg:mb-10 lg:mt-0">
                    <label
                      className="text-base"
                      style={{ color: "blueviolet" }}
                    >
                      Red Hat Boy Game
                    </label>
                    <label
                      className="text-2xl font-bold"
                      style={{ color: "white" }}
                    >
                      2D Game Webpage
                    </label>
                    <p className="w-full text-base text-gray-400 text-justify lg:text-start mt-5">
                      Red Hat Boy game is a 2D game created using HTML, CSS,
                      JavaScript.
                    </p>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://www.youtube.com/watch?v=j09riNG4RhQ&t=12s&ab_channel=HirushaLiyanage"
                      className="mt-5"
                    >
                      Watch the Video
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-end">
                    <img
                      src="game.png"
                      className="rounded-xl hover:opacity-75 lg:block hidden"
                      height={50}
                    />
                  </div>
                </Card>
                <Card className="w-full flex flex-col lg:flex-row rounded-2xl p-10 hover:-translate-y-2">
                  <div className="w-full lg:w-1/2 flex justify-start">
                    <img
                      src="Robo.png"
                      className="rounded-xl hover:opacity-75 lg:block hidden"
                      height={50}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 flex lg:items-end flex-col lg:justify-center mt-0 lg:mt-0">
                    <label
                      className="text-base"
                      style={{ color: "blueviolet" }}
                    >
                      Robot Car
                    </label>
                    <label
                      className="text-2xl font-bold"
                      style={{ color: "white" }}
                    >
                      Arduino Robot
                    </label>
                    <p className="w-full text-base text-gray-400 text-justify lg:text-end mt-5">
                      Robot Car is a car made using arduino robot car kit. It
                      can be controlled by a Java application and from a mobile
                      Application. It is programed using arduino.
                    </p>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://www.youtube.com/watch?v=ek7BOYsk4mY&ab_channel=HirushaLiyanage"
                      className="mt-5"
                    >
                      Watch the Video
                    </Link>
                  </div>
                </Card>
                <Card className="w-full flex flex-col lg:flex-row rounded-2xl p-10 hover:-translate-y-2">
                  <div className="w-full lg:w-1/2 flex lg:items-start flex-col lg:justify-center lg:mb-10 lg:mt-0">
                    <label
                      className="text-base"
                      style={{ color: "blueviolet" }}
                    >
                      Adyapana Student Management System
                    </label>
                    <label
                      className="text-2xl font-bold"
                      style={{ color: "white" }}
                    >
                      Desktop Application
                    </label>
                    <p className="w-full text-base text-gray-400 text-justify lg:text-start mt-5">
                      Adyapana Student Management System is a Desktop
                      Application which is used to manage students, teachers,
                      classes, subjects and payments. It is developed using
                      Java.
                    </p>
                    <Link
                      isExternal
                      showAnchorIcon
                      href="/assets/Adyapana_SMS.zip"
                      className="mt-5"
                    >
                      Download the Project
                    </Link>
                  </div>
                  <div className="w-full lg:w-1/2 flex justify-end">
                    <img
                      src="sms.png"
                      className="rounded-xl hover:opacity-75 lg:block hidden"
                      height={50}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center mt-40 flex-row p-5 relative"
            id="Contact"
          >
            <div className="w-full flex flex-col items-center">
              <label className="text-4xl font-bold text-start">
                Contact Me
              </label>
              <p className="text-lg mt-2 text-center text-gray-500">
                Me and our team is always looking for any project. So, if You
                have any questions <br className="hidden lg:block" /> about
                creating any <br className="hidden md:block lg:hidden" /> type
                of applications. Feel free to Contact Me.
              </p>
              <div className="w-full flex gap-2 justify-center flex-col lg:flex-row">
                <Button
                  className="flex items-center mt-2 font-bold"
                  as={Link}
                  href="https://wa.me/+94767072429"
                  target="_blank"
                  variant="shadow"
                  style={{ backgroundColor: "green" }}
                >
                  <FaWhatsapp size={18} />
                  Contact via Whatsapp
                </Button>
                <Button
                  className="flex items-center mt-2 font-bold"
                  as={Link}
                  href="mailto:hirusha.ashen5559@gmail.com"
                  target="_blank"
                  variant="shadow"
                  style={{ backgroundColor: "red" }}
                >
                  <SiGmail size={18} />
                  Contact via Email
                </Button>
              </div>
            </div>
          </div>

          <footer className="w-full bottom-0 flex items-center flex-col mt-20 border-t border-gray-700 footer p-10">
            <label className="text-2xl font-bold flex items-center">
              <img src="HLLogo.png" className="h-14" />
              &nbsp;HIRUSHA LIYANAGE
            </label>
            <div className="w-full flex justify-center gap-3 mt-5 mb-5 flex-wrap">
              <a
                className="cursor-pointer font-bold text-lg"
                href="#About"
                style={{ color: "blueviolet" }}
              >
                About
              </a>
              <a
                className="cursor-pointer font-bold text-lg"
                href="#Skills"
                style={{ color: "blueviolet" }}
              >
                Skills
              </a>
              <a
                className="cursor-pointer font-bold text-lg"
                href="#Experience"
                style={{ color: "blueviolet" }}
              >
                Experience
              </a>
              <a
                className="cursor-pointer font-bold text-lg"
                href="#Projects"
                style={{ color: "blueviolet" }}
              >
                Projects
              </a>
              <a
                className="cursor-pointer font-bold text-lg"
                href="#Contact"
                style={{ color: "blueviolet" }}
              >
                Contact Me
              </a>
            </div>
            <div className="w-full flex justify-center gap-3 mt-5 mb-5">
              <a
                className="bg-gray-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
                href="https://www.facebook.com/profile.php?id=61555955936783"
                target="_blank"
              >
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="bg-gray-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
                href="https://www.instagram.com/_hirusha_ashen_/"
                target="_blank"
              >
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="bg-gray-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
                href="https://github.com/hililk"
                target="_blank"
              >
                <svg
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="bg-gray-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
                href="https://www.linkedin.com/in/hirusha-liyanage-8ab813317/"
                target="_blank"
              >
                <svg
                  className="h-5 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a
                className="bg-gray-900 rounded-full p-2 cursor-pointer flex items-center justify-center"
                href="https://www.youtube.com/@hililk"
                target="_blank"
              >
                <svg
                className="h-5 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
            </div>

            <label className="text-base font-normal text-gray-400">
              &copy; {currentYear} Hirusha Liyanage. All rights reserved.
            </label>
          </footer>
        </div>
      </main>
    </>
  );
}
