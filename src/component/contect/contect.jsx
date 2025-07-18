import { useContext } from "react";
import { Context } from "../../context/context";
import "./contect.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);
let Contect = () => {
  let {
    onSubmit,
    massage,
    msg,
    setmsg,
    email,
    setEmail,
    name,
    setName,
    mode,
    send,
  } = useContext(Context);
  useGSAP(
    () => {
      gsap.from("div", {
        y: -20,
        opacity: 0,
        duration: 3,
        delay: 0.5,
        scrollTrigger: {
          trigger: "div",
        },
      });
    },
    { scope: ".contect-section" }
  );
  useGSAP(
    () => {
      gsap.from(".contect2", {
        x: -1000,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".contect2",
        },
      });
    },
    { scope: ".contect-container" }
  );
  return (
    <>
      {" "}
      {mode == "dark" ? (
        <div className="contect-section" id="contect">
          <div className="contect-about">
            <p style={{ color: "white", fontSize: "30px" }}> Contect With me</p>
            <div className="about" style={{ color: "white" }}>
              <p>I'm always open to discussing new</p>
              <p>
                projects, creative ideas, or oppertunities to be part of your
                vision.
              </p>
              <p>Feel free to reach out through the form</p>
              <p>bellow or connect with me on socail media platform.</p>
            </div>
            <p style={{ fontSize: "25px", color: "white", marginTop: "1rem" }}>
              Get in touch
            </p>
          </div>
          <div className="contect-container">
            <div className="contect1">
              <div
                className="canvas"
                style={{ fontSize: "25px", color: "white" }}
              >
                <p className="icon">SC.</p>
              </div>
              <p className="heading">Let's talk</p>
              <div className="pera">
                <p>
                  I am currently avliable to take on new projects, so feel free
                  to
                </p>
                <p>me a message about anything that you want me to work on.</p>
                <p>You can contact anytime.</p>
              </div>
              <div className="email">
                <img
                  src="https://iconape.com/wp-content/uploads/1/11/gmail-02.png"
                  width={27}
                  height={22}
                  alt=""
                />{" "}
                <a href="mailto:chatterjeeshyamdyuti@gmail.com">
                  <p style={{ color: "white", fontSize: "15px" }}>
                    chatterjeeshyamdyuti@gmail.com
                  </p>
                </a>
              </div>
              <div className="call">
                <img
                  src="https://th.bing.com/th/id/OIP.GOxWWwPy-60orP0PSlXLBQHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
                  width={22}
                  height={20}
                  alt=""
                />{" "}
                <p style={{ color: "white", fontSize: "15px" }}>
                  +919907843461
                </p>
              </div>
              <div className="facebook">
                <img
                  src="https://th.bing.com/th/id/R.8b4e0813e813feab6c598f77887b1485?rik=G2l5mCAvaYfBmw&riu=http%3a%2f%2fwww.dayzcolony.com%2fwp-content%2fuploads%2f2017%2f10%2fFacebook-Circle-Icon.png&ehk=4QVaOzH7aUagUjzLAayVs1NUmFN%2bySZGWRnVZWo%2bDAU%3d&risl=&pid=ImgRaw&r=0"
                  height={24}
                  width={24}
                  alt=""
                />
                <a
                  href="http://www.facebook.com/shyam.chatterjee.942"
                  target="_blank"
                >
                  <p style={{ fontSize: "15px", color: "white" }}>Facebook</p>
                </a>
              </div>
              <div className="instagram">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
                  width={26}
                  height={20}
                  alt=""
                />
                <a
                  href="http://www.instagram.com/shyamdyuti/profilecard/?igsh=bWlqOGhodzd4MnR2"
                  target="_blank"
                >
                  <p style={{ fontSize: "15px", color: "white" }}>Instagram</p>
                </a>
              </div>
            </div>
            <div className="contect2">
              <form className="form" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="name-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="email-input"
                  required
                />

                <textarea
                  name="massage"
                  id=""
                  value={msg}
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  placeholder="Enter your massage"
                  className="massage-input"
                  required
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="contect-buttons"
                />
                <p style={{ color: "green", textAlign: "center" }}>{send}</p>
                <p className="green">{massage}</p>
              </form>
            </div>
          </div>
          <div className="footer">
            <div className="div">
              <div className="instagram">
                <img
                  src="https://www.freepngimg.com/download/symbol/62766-map-symbol-computer-location-icons-free-download-png-hd.png"
                  width={24}
                  height={20}
                  alt=""
                />
                <a
                  href="https://maps.app.goo.gl/7koPcpZB9dAYfF2J9"
                  target="_blank"
                >
                  <p style={{ fontSize: "15px", color: "white" }}>Kolkata,</p>
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "white", fontSize: "10px" }}>@</p>

                <p> 2025 Shyamdyuti Chatterjee. All rights reserved.</p>
              </div>
            </div>
            <div className="linkedin-github">
              <div className="github-link">
                <FaGithub style={{ color: "white" }} />
                <a href="https://github.com/shyamchatterjee">
                  <p style={{ fontSize: "15px", color: "white" }}>GitHub</p>
                </a>
              </div>
              <div className="github-link">
                <FaLinkedin style={{ color: "white" }} />
                <a href="https://www.linkedin.com/in/shyam-chatterjee-70bb7531a">
                  <p style={{ fontSize: "15px", color: "white" }}>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="contect-section" id="contect">
          <div className="contect-about">
            <p style={{ color: "black", fontSize: "30px" }}> Contect With me</p>
            <div className="about" style={{ color: "black" }}>
              <p>I'm always open to discussing new</p>
              <p>
                projects, creative ideas, or oppertunities to be part of your
                vision.
              </p>
              <p>Feel free to reach out through the form</p>
              <p>bellow or connect with me on socail media platform.</p>
            </div>
            <p style={{ fontSize: "25px", color: "black", marginTop: "1rem" }}>
              Get in touch
            </p>
          </div>
          <div className="contect-container">
            <div className="contect1">
              <div
                className="canvas"
                style={{ fontSize: "20px", color: "black" }}
              >
                <p className="icon">SC.</p>
              </div>
              <p className="heading" style={{ color: "white" }}>
                Let's talk
              </p>
              <div className="pera" style={{ color: "black" }}>
                <p>
                  I am currently avliable to take on new projects, so feel free
                  to
                </p>
                <p>me a message about anything that you want me to work on.</p>
                <p>You can contact anytime.</p>
              </div>
              <div className="email">
                <img
                  src="https://iconape.com/wp-content/uploads/1/11/gmail-02.png"
                  width={27}
                  height={22}
                  alt=""
                />
                <a href="mailto:chatterjeeshyamdyuti@gmail.com">
                  <p style={{ color: "black", fontSize: "15px" }}>
                    chatterjeeshyamdyuti@gmail.com
                  </p>
                </a>
              </div>
              <div className="call">
                <img
                  src="https://th.bing.com/th/id/OIP.GOxWWwPy-60orP0PSlXLBQHaHa?cb=iwc2&rs=1&pid=ImgDetMain"
                  width={22}
                  height={20}
                  alt=""
                />{" "}
                <p style={{ color: "black", fontSize: "15px" }}>
                  +919907843461
                </p>
              </div>
              <div className="facebook">
                <img
                  src="https://th.bing.com/th/id/R.8b4e0813e813feab6c598f77887b1485?rik=G2l5mCAvaYfBmw&riu=http%3a%2f%2fwww.dayzcolony.com%2fwp-content%2fuploads%2f2017%2f10%2fFacebook-Circle-Icon.png&ehk=4QVaOzH7aUagUjzLAayVs1NUmFN%2bySZGWRnVZWo%2bDAU%3d&risl=&pid=ImgRaw&r=0"
                  height={24}
                  width={24}
                  alt=""
                />
                <a
                  href="http://www.facebook.com/shyam.chatterjee.942"
                  target="_blank"
                >
                  <p style={{ fontSize: "15px", color: "black" }}>Facebook</p>
                </a>
              </div>
              <div className="instagram">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png"
                  width={26}
                  height={20}
                  alt=""
                />
                <a
                  href="http://www.instagram.com/shyamdyuti/profilecard/?igsh=bWlqOGhodzd4MnR2"
                  target="_blank"
                >
                  {" "}
                  <p style={{ fontSize: "15px", color: "black" }}>Instagram</p>
                </a>
              </div>
            </div>
            <div className="contect2">
              <form className="form" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="name-input-light"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  value={email}
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="email-input-light"
                  required
                />

                <textarea
                  name="massage"
                  id=""
                  value={msg}
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  placeholder="Enter your massage"
                  className="massage-input-light"
                  required
                ></textarea>
                <input
                  type="submit"
                  value="Submit"
                  className="contect-buttons"
                />
                <p style={{ color: "green", textAlign: "center" }}>{send}</p>
                <p className="green">{massage}</p>
              </form>
            </div>
          </div>
          <div className="footer">
            <div className="div">
              <div className="instagram">
                <img
                  src="https://www.freepngimg.com/download/symbol/62766-map-symbol-computer-location-icons-free-download-png-hd.png"
                  width={24}
                  height={20}
                  alt=""
                />
                <a
                  href="https://maps.app.goo.gl/7koPcpZB9dAYfF2J9"
                  target="_blank"
                >
                  <p style={{ fontSize: "15px", color: "black" }}>Kolkata,</p>
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "black", fontSize: "10px" }}>@</p>

                <p style={{ color: "black" }}>
                  {" "}
                  2025 Shyamdyuti Chatterjee. All rights reserved.
                </p>
              </div>
            </div>
            <div className="linkedin-github">
              <div className="github-link-light">
                <FaGithub style={{ color: "black" }} />
                <a href="https://github.com/shyamchatterjee">
                  <p style={{ fontSize: "15px", color: "black" }}>GitHub</p>
                </a>
              </div>
              <div className="github-link-light">
                <FaLinkedin style={{ color: "black" }} />
                <a href="https://www.linkedin.com/in/shyam-chatterjee-70bb7531a">
                  <p style={{ fontSize: "15px", color: "black" }}>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Contect;
