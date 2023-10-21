import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="mb-4 text-4xl font-black sm:mb-6 md:mb-8 md:text-5xl">
        About
      </h1>
      <div className="border-t-2 border-profile md:flex md:space-x-6">
        <div className="my-5 text-sm sm:text-base md:mb-0 md:flex-1">
          <p>
            Greetings, I&apos;m John Uby C. Solinap, a Computer Engineering
            graduate with a strong fondness for the world of coding. My career
            path has been a fascinating journey of self-discovery, transitioning
            from a background in Quality Assurance Engineering, then
            Telecommunications Field Engineering, to my current role as a
            self-taught programmer. It all started in July 2022 when I embarked
            on a mission to learn the art of programming. My voyage of
            self-improvement and skill development has taken me from the realms
            of Python, where I honed my problem-solving skills and my love for
            programming begins, to the dynamic world of JavaScript. Presently,
            I&apos;m delving deeper into web development and my chosen library
            is ReactJS, expanding my knowledge with each passing day. My
            commitment to continuous learning is unwavering. I believe that the
            key to growth is hands-on experience, which is why I consistently
            build projects from the ground up to apply the skills I&apos;ve
            acquired.
          </p>
          <br />
          <p>
            Through this process, I have cultivated a profound love for
            problem-solving and a creative approach to software development. I
            invite you to join me on this thrilling journey of self-taught
            programming as I explore the vast potential of the digital
            landscape. My dedication to this endeavor is driven by a deep
            passion for technology and a strong desire to contribute to the
            ever-evolving world of software development. As I continue to expand
            my skills and create innovative solutions, I&apos;m excited to share
            my experiences and insights with the world. Together, we can harness
            the power of programming to make a lasting impact in this digital
            age.
          </p>
        </div>
        <div className="md:mt-5 md:flex-1">
          <h1 className="mb-6 text-xl font-bold sm:text-3xl">Technologies</h1>
          <ul className="mb-3 flex flex-wrap space-x-4">
            <li className="list-items mb-4">Python</li>
            <li className="list-items mb-4">Flask</li>
            <li className="list-items mb-4">HTML</li>
            <li className="list-items mb-4">CSS</li>
            <li className="list-items mb-4">Tailwind</li>
            <li className="list-items mb-4">Bootstrap</li>
            <li className="list-items mb-4">Javascript</li>
            <li className="list-items mb-4">React</li>
            <li className="list-items mb-4">Postgresql</li>
            <li className="list-items mb-4">SQLite</li>
            <li className="list-items mb-4">Git</li>
            <li className="list-items mb-4">Github</li>
            <li className="list-items mb-4">Netlify</li>
            <li className="list-items mb-4">Heroku</li>
            <li className="list-items mb-4">Vite</li>
            <li className="list-items mb-4">Microsoft Office</li>
            <li className="list-items mb-4">Windows</li>
          </ul>
          <Button type="primary" onClick={() => navigate("/projects")}>
            <i className="fa-solid fa-forward md:ml-5" /> View my projects{" "}
            <i className="fa-solid fa-laptop-code" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
