import "./About.css";
import Footer from "../Footer/Footer";

function AboutPage() {
  return (
    <>
      <div className="about">
        <div className="about__holder">
          <h3 className="about__title">About Me</h3>
          <p className="about__content">
            Filler words, also known as vocal disfluencies or hesitations, are
            words or sounds that people use to indicate they are thinking but
            have not finished speaking. They are often used excessively, but can
            be removed without changing the meaning of the sentence.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
