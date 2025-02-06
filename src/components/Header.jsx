const Header = () => {
  return (
    <header className="bg-dark text-light min-h-[92vh] flex items-center justify-between px-8 md:px-16 lg:px-32">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Eyüp Can <span className="text-primary">MERT</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mt-4">Frontend Web Developer</h2>
        <p className="text-grayText mt-4">
          As a Frontend Web Developer, I specialize in crafting modern,
          responsive, and efficient user interfaces using the latest
          technologies. My skills include HTML5, CSS3, JavaScript, and
          TypeScript, with expertise in frameworks like React, React Native, and
          VueJS. I also work extensively with Tailwind CSS and Bootstrap to
          create sleek, scalable designs, and I am proficient in version control
          using Git.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <button className="border-2 border-light px-6 py-2 rounded-md hover:bg-primary hover:text-light transition">
            <a href="mailto:eypcnmrt@gmail.com" className="block">
              Contact Me
            </a>
          </button>
          <a
            href="https://github.com/eypcnmrt"
            className="text-2xl hover:text-primary transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/eypcnmrt/"
            className="text-2xl hover:text-primary transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
};

export default Header;
