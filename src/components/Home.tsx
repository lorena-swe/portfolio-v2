import "./Home.css";
import girlImg from "../assets/girl_insert_block_animated_gif.gif";

function Home() {
  return (
    <div
      id="home"
      className="home-section h-screen w-full py-10 px-8 md:px-16  flex flex-col justify-center"
    >
      <img className="girl-image" src={girlImg} alt="Girl Image" />
      <p className="intro-text mb-4">Hi there! My name is</p>
      <h1 className="name-text">Lorena Zotaj</h1>
      <h2 className="faded-text catchy-phrase pt-2 max-w-full lg:max-w-xl">
        I craft seamless user experiences.
      </h2>
      <p className="max-w-full lg:max-w-xl faded-text d-parag mt-10">
        I’m a{" "}
        <strong>
          <a href="https://github.com/lorena-swe" target="blank">
            frontend engineer
          </a>
        </strong>{" "}
        specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on upskilling my skills in{" "}
        <strong>
          <a href="https://github.com/lorena-swe" target="blank">
            React
          </a>
        </strong>{" "}
        through {""}
        <strong>
          <a href="https://github.com/lorena-swe" target="blank">
            challenging projects
          </a>
        </strong>
        .
      </p>
      {/* <a href="https://storyset.com/device">Device illustrations by Storyset</a> */}
      {/* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */}
      {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}
      {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}

      {/* <a href="https://storyset.com/online">Online illustrations by Storyset</a> */}
    </div>
  );
}

export default Home;
