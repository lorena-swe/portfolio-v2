import "./Home.css";

const Home = () => (
  <div
    id="home"
    className="section h-screen w-full py-10 px-16 flex flex-col justify-center"
  >
    <p className="intro-text mb-4">Hi there! My name is</p>
    <h1 className="name-text">Lorem Ipsum</h1>
    <h2 className="faded-text catchy-phrase pt-2">
      I craft seamless user experiences.
    </h2>
    <p className="max-w-full lg:max-w-xl faded-text d-parag mt-10">
      I’m a{" "}
      <strong>
        <a href="https://github.com/lorena-swe" target="blank">
          frontend engineer
        </a>
      </strong>{" "}
      specializing in building (and occasionally designing) exceptional digital
      experiences. Currently, I’m focused on upskilling my skills in{" "}
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
  </div>
);

export default Home;
