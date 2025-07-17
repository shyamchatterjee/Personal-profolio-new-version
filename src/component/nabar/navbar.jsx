import { useContext, useState } from "react";
import "./navbar.css";
import { CiLight } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { CiDark } from "react-icons/ci";
import { Context } from "../../context/context";
let Navbar = () => {
  let [boolen, setBoolen] = useState(true);
  let [page, setpage] = useState("home");
  let [bool, setBool] = useState(true);
  let { mode, setMode } = useContext(Context);
  let clickbar = () => {
    setBoolen(false);
  };
  return (
    <>
      {mode == "dark" ? ( 
        <div className="navbar-section">
          <div className="canvas-icon">
            <p className="icon">SC.</p>
          </div>
          <div className="navbar">
            <AnchorLink href="#home">
              <p
                onClick={() => {
                  setpage("home");
                }}
                className={page == "home" ? "active" : ""}
                style={{ color: "white" }}
              >
                Home
              </p>{" "}
            </AnchorLink>
            <AnchorLink href="#about">
              {" "}
              <p
                onClick={() => {
                  setpage("about");
                }}
                className={page == "about" ? "active" : ""}
                style={{ color: "white" }}
              >
                About me
              </p>
            </AnchorLink>
            <AnchorLink href="#service">
              {" "}
              <p
                onClick={() => {
                  setpage("service");
                }}
                className={page == "service" ? "active" : ""}
                style={{ color: "white" }}
              >
                Service
              </p>
            </AnchorLink>
            <AnchorLink href="#work">
              <p
                onClick={() => {
                  setpage("work");
                }}
                style={{ color: "white" }}
                className={page == "work" ? "active" : ""}
              >
                My Work
              </p>
            </AnchorLink>
            <AnchorLink href="#contect">
              <p
                onClick={() => {
                  setpage("contect");
                }}
                className={page == "contect" ? "active" : ""}
                style={{ color: "white" }}
              >
                Contect
              </p>
            </AnchorLink>
          </div>
          <div className={boolen == true ? "navbar-mobile" : "navbar-change"}>
            <IoMdClose
              className="close-icon"
              onClick={() => {
                setBoolen(true);
              }}
            />
            <AnchorLink href="#home">
              {" "}
              <p
                onClick={() => {
                  setpage("home");
                }}
                style={{ color: "white" }}
                className={page == "home" ? "active" : ""}
              >
                Home
              </p>
            </AnchorLink>
            <AnchorLink href="#about">
              {" "}
              <p
                onClick={() => {
                  setpage("about");
                }}
                className={page == "about" ? "active" : ""}
                style={{ color: "white" }}
              >
                About me
              </p>
            </AnchorLink>
            <AnchorLink href="#service">
              {" "}
              <p
                onClick={() => {
                  setpage("service");
                }}
                className={page == "service" ? "active" : ""}
                style={{ color: "white" }}
              >
                Service
              </p>
            </AnchorLink>
            <AnchorLink href="#work">
              {" "}
              <p
                onClick={() => {
                  setpage("work");
                }}
                className={page == "work" ? "active" : ""}
                style={{ color: "white" }}
              >
                My Work
              </p>
            </AnchorLink>
            <AnchorLink href="#contect">
              {" "}
              <p
                onClick={() => {
                  setpage("contect");
                }}
                className={page == "contect" ? "active" : ""}
                style={{ color: "white" }}
              >
                Contect
              </p>
            </AnchorLink>
          </div>
          <div className="button-icon">
            <AnchorLink href="#contect">
              {" "}
              <button className="contect-button">Contact with me</button>
            </AnchorLink>
            {bool == true ? (
              <CiLight
                className="full-screen-icon"
                onClick={() => {
                  setBool(false), setMode("light");
                }}
              />
            ) : (
              <CiDark
                className="full-screen-icon"
                onClick={() => {
                  setBool(true), setMode("dark");
                }}
              />
            )}
          </div>

          <div className="bar-mode">
            {bool == true ? (
              <CiLight
                className="mobile-screen-icon"
                style={{ fontSize: "30px" }}
                onClick={() => {
                  setBool(false), setMode("light");
                }}
              />
            ) : (
              <CiDark
                className="mobile-screen-icon"
                style={{ fontSize: "30px" }}
                onClick={() => {
                  setBool(true), setMode("dark");
                }}
              />
            )}
            <FaBars className="bar" onClick={clickbar} />
          </div>
        </div>
      ) : <div style={{color:"black",border:"1px solid black",backgroundColor:"#eaeaea",position:"fixed",top:"0",left:"0",right:"0",zIndex:"2"}} className="navbar-section">
          <div className="canvas-icon">
            <p className="icon">SC.</p>
          </div>
          <div className="navbar">
            <AnchorLink href="#home">
              <p
                onClick={() => {
                  setpage("home");
                }}
                className={page == "home" ? "active" : ""}
                style={{ color: "black" }}
              >
                Home
              </p>{" "}
            </AnchorLink>
            <AnchorLink href="#about">
              {" "}
              <p
                onClick={() => {
                  setpage("about");
                }}
                className={page == "about" ? "active" : ""}
                style={{ color: "black" }}
              >
                About me
              </p>
            </AnchorLink>
            <AnchorLink href="#service">
              {" "}
              <p
                onClick={() => {
                  setpage("service");
                }}
                className={page == "service" ? "active" : ""}
                style={{ color: "black" }}
              >
                Service
              </p>
            </AnchorLink>
            <AnchorLink href="#work">
              <p
                onClick={() => {
                  setpage("work");
                }}
                style={{ color: "black" }}
                className={page == "work" ? "active" : ""}
              >
                My Work
              </p>
            </AnchorLink>
            <AnchorLink href="#contect">
              <p
                onClick={() => {
                  setpage("contect");
                }}
                className={page == "contect" ? "active" : ""}
                style={{ color: "black" }}
              >
                Contect
              </p>
            </AnchorLink>
          </div>
          <div style={{backgroundColor:"#eaeaea",background:"transparent" ,backdropFilter:"blur(15px)"}} className={boolen==true?"navbar-mobile":"navbar-change"}>
            <IoMdClose
            style={{color:"black"}}
              className="close-icon"
              onClick={() => {
                setBoolen(true);
              }}
            />
            <AnchorLink href="#home">
              
              <p
                onClick={() => {
                  setpage("home");
                }}
                style={{ color: "black" }}
                className={page == "home" ? "active" : ""}
              >
                Home
              </p>
            </AnchorLink>
            <AnchorLink href="#about">
              {" "}
              <p
                onClick={() => {
                  setpage("about");
                }}
                className={page == "about" ? "active" : ""}
                style={{ color: "black" }}
              >
                About me
              </p>
            </AnchorLink>
            <AnchorLink href="#service">
              {" "}
              <p
                onClick={() => {
                  setpage("service");
                }}
                className={page == "service" ? "active" : ""}
                style={{ color: "black" }}
              >
                Service
              </p>
            </AnchorLink>
            <AnchorLink href="#work">
              {" "}
              <p
                onClick={() => {
                  setpage("work");
                }}
                className={page == "work" ? "active" : ""}
                style={{ color: "black" }}
              >
                My Work
              </p>
            </AnchorLink>
            <AnchorLink href="#contect">
              {" "}
              <p
                onClick={() => {
                  setpage("contect");
                }}
                className={page == "contect" ? "active" : ""}
                style={{ color: "black" }}
              >
                Contect
              </p>
            </AnchorLink>
          </div>
          <div className="button-icon">
            <AnchorLink href="#contect">
              {" "}
              <button className="contect-button">Contact with me</button>
            </AnchorLink>
            {bool == true ? (
              <CiLight
                className="full-screen-icon"
                onClick={() => {
                  setBool(false), setMode("light");
                }}
              />
            ) : (
              <CiDark
                className="full-screen-icon"
                onClick={() => {
                  setBool(true), setMode("dark");
                }}
              />
            )}
          </div>

          <div className="bar-mode">
            {bool == true ? (
              <CiLight
                className="mobile-screen-icon"
                style={{ fontSize: "30px" }}
                onClick={() => {
                  setBool(false), setMode("light");
                }}
              />
            ) : (
              <CiDark
                className="mobile-screen-icon"
                style={{ fontSize: "30px" }}
                onClick={() => {
                  setBool(true), setMode("dark");
                }}
              />
            )}
            <FaBars className="bar" onClick={clickbar} />
          </div>
        </div>
       }
    </>
  );
};
export default Navbar;
