import { useContext } from "react";
import "./about.css";
import { GiSkills } from "react-icons/gi";
import { Context } from "../../context/context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
let About = () => {
  let { mode } = useContext(Context);
  useGSAP(
    () => {
      gsap.from("  p,div", {
        opacity: 0,
        y: 80,
        duration: 3,
        delay: 0.5,
        scrollTrigger: ".about-section",
      });
    },
    { scope: ".about-section" }
  );

  return (
    <>
      {" "}
      {mode == "dark" ? (
        <div className="about-section" id="about">
          <p className="about-me" style={{ color: "white" }}>
            About me
          </p>
          <div className="about-pera">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE-4chE9AUJSg/profile-displayphoto-shrink_800_800/B4DZZCmfrwGwAc-/0/1744874113781?e=1753315200&v=beta&t=nmE_bnRCgltXMBO7VP06Ij0fEC0D-iQzXDM8fXsmSjI"
              className="picture"
              alt=""
            />
            <div className="pera-about">
              <div className="pera">
                <p> I am an Frontend Developer</p>
                <p> with a strong love for building beautuful,</p>
                <p>user-freindly web interfaces. </p>
                <p> I specialize in HTML, CSS, Javascript, and React.js. </p>
              </div>
              <div className="programing-section">
                <div className="programing">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                </div>
                <div className="div-container">
                  <div className="div1"></div>
                  <div className="div2"></div>
                  <div className="div3"></div>
                  <div className="div4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="skill">
              <GiSkills />
              <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Skills</p>
              <p>HTML,CSS,Javascript,React.js</p>
            </div>
            <div className="skill">
              <img
                src="https://i.pinimg.com/originals/20/4c/fd/204cfda4301da1732423e41e57ac2945.png"
                width={20}
                height={20}
                alt=""
              />
              <p style={{ fontSize: "20px", fontWeight: "bolder" }}>
                Education
              </p>
              <p>Self-taught developer, learning coding through Youtube</p>
            </div>
            <div className="skill">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9785/9785470.png"
                width={30}
                height={30}
                alt=""
              />
              <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Projects</p>
              <p>Built more then 5 projects</p>
            </div>
          </div>
          <div className="tools-container">
            <p style={{ color: "white" }}>Tools I Used</p>
            <div className="tools-section">
              <div className="tool">
                <img
                  src="https://w7.pngwing.com/pngs/284/106/png-transparent-visual-studio-code-logo.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="tool">
                <img
                  src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="tool">
                <img
                  src="https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="tool">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="about-section" id="about">
          <p className="about-me" style={{ color: "black" }}>
            About me
          </p>
          <div className="about-pera">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE-4chE9AUJSg/profile-displayphoto-shrink_800_800/B4DZZCmfrwGwAc-/0/1744874113781?e=1753315200&v=beta&t=nmE_bnRCgltXMBO7VP06Ij0fEC0D-iQzXDM8fXsmSjI"
              className="picture"
              alt=""
            />
            <div className="pera-about">
              <div className="pera" style={{ color: "black" }}>
                <p> I am an Frontend Developer</p>
                <p> with a strong love for building beautuful,</p>
                <p>user-freindly web interfaces. </p>
                <p> I specialize in HTML, CSS, Javascript, and React.js. </p>
              </div>
              <div className="programing-section">
                <div className="programing" style={{ color: "black" }}>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>React</p>
                </div>
                <div className="div-container">
                  <div className="div1"></div>
                  <div className="div2"></div>
                  <div className="div3"></div>
                  <div className="div4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-container">
            <div className="skill-light">
              <GiSkills />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                Skills
              </p>
              <p>HTML,CSS,Javascript,React.js</p>
            </div>
            <div className="skill-light">
              <img
                src="https://i.pinimg.com/originals/20/4c/fd/204cfda4301da1732423e41e57ac2945.png"
                width={20}
                height={20}
                alt=""
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                Education
              </p>
              <p>Self-taught developer, learning coding through Youtube</p>
            </div>
            <div className="skill-light">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9785/9785470.png"
                width={30}
                height={30}
                alt=""
              />
              <p style={{ fontSize: "20px", fontWeight: "bolder" }}>Projects</p>
              <p>Built more then 5 projects</p>
            </div>
          </div>
          <div className="tools-container">
            <p style={{ color: "white" }}>Tools I Used</p>
            <div className="tools-section">
              <div className="tool-light">
                <img
                  src="https://w7.pngwing.com/pngs/284/106/png-transparent-visual-studio-code-logo.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="tool-light">
                <img
                  src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="tool-light">
                <img
                  src="https://imagepng.org/wp-content/uploads/2019/08/google-chrome-icon-1.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
              <div className="tool-light">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default About;
