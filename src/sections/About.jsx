function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2>About Me</h2>

        <p>
          I am a Digital Media student on the Web Design track with a strong
          passion for technology and the creative possibilities that come from
          it. I am especially interested in how digital media allows people to
          communicate, create, and express themselves through modern technology.
        </p>

        <p>
          Through my coursework and personal projects, I have built experience
          with HTML, CSS, JavaScript, React, and Python. I enjoy learning how
          websites and applications are built, and I am always looking for ways
          to improve my skills as both a developer and designer.
        </p>

        <p>
          Outside of web development, I am also interested in Linux, hardware
          repair, soldering, and 3D printing. Exploring both the software and
          hardware sides of technology has helped me become more adaptable,
          curious, and confident when solving problems.
        </p>

        <div className="about-content">
          <div className="about-card">
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>Git & GitHub</li>
              <li>Linux</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Interests</h3>
            <ul>
              <li>Web Design and Development</li>
              <li>Digital Media and Technology</li>
              <li>Linux and Open-Source Systems</li>
              <li>3D Printing</li>
              <li>Hardware Repair and Soldering</li>
              <li>Learning How Technology Works</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;