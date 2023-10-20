function Footer() {
  return (
    <footer className="mb-5 mt-10 border-t-2 border-profile lg:mx-16">
      <div className="mt-4 items-center justify-between space-y-3 sm:flex sm:space-y-0">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            href="https://www.linkedin.com/in/uby-solinap/"
            className="text-2xl transition-all hover:scale-125 hover:text-profile"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://github.com/UbySolinap"
            className="text-2xl transition-all hover:scale-125 hover:text-profile"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="mailto:ubys06@gmail.com"
            className="text-2xl transition-all hover:scale-125 hover:text-profile"
          >
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
        <div>
          <p className="text-sm font-bold sm:text-base">
            <i className="fa-regular fa-copyright" /> 2023 John Uby Solinap
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
