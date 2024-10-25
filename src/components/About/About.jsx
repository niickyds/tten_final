import "./About.css";
import Footer from "../Footer/Footer";

function AboutPage() {
  return (
    <>
      <div className="about">
        <div className="about__holder">
          <h3 className="about__title">About Me</h3>
          <p className="about__content">
            Hello, I'm Nick, a dedicated Full Stack Engineer that studied under
            TripleTen. My journey studying under them has been incredibly
            rewarding, allowing me to take ownership of projects and experience
            rapid professional growth through continuous learning. Each project
            presents a unique opportunity for me to expand my technical
            repertoire and push the boundaries of innovation. Let's connect and
            explore opportunities to collaborate on exciting ventures together!
          </p>
          {/* <br /> */}
          Link to my github:{" "}
          <a
            href="https://github.com/niickyds?tab=repositories"
            className="about__link"
            target="_blank"
          >
            here
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
