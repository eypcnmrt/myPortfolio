import eypStore from '../assets/eypStore.png';
import Food from '../assets/Food.png';
const projects = [
  {
    title: 'E-commerce Website',
    description:
      'A modern e-commerce website built with React and Tailwind CSS, featuring a responsive design and seamless user experience.',
    demoLink: 'https://eypstore.netlify.app/',
    codeLink: 'https://github.com/eypcnmrt/eypStore',
    image: eypStore,
    reverse: false,
  },
  {
    title: 'ReactSessionControlCrud',
    description:
      'A session-based CRUD application built with React, TypeScript, and Tailwind CSS, integrating a dummy database for API operations and efficient state management.',
    demoLink: 'https://react-session-control-crud.vercel.app/',
    codeLink: 'https://github.com/eypcnmrt/ReactSessionControlCrud',
    image: Food,
    reverse: true,
  },
];

const Projects = () => {
  return (
    <>
      <section className="bg-dark text-light py-16 mt-24">
        <h2 className="text-center text-3xl font-bold mb-32">
          <span className="border-b-2 border-primary pb-2">Last Projects</span>
        </h2>
        <div className="flex flex-col gap-16 px-8 md:px-16 lg:px-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                project.reverse ? 'md:flex-row-reverse' : ''
              } gap-8`}
            >
              {/* Proje Görseli */}
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Proje İçeriği */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-grayText mt-2">{project.description}</p>
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <a
                    href={project.demoLink}
                    className="px-4 py-2 bg-primary text-dark font-semibold rounded-md"
                  >
                    DEMO
                  </a>
                  <a
                    href={project.codeLink}
                    className="px-4 py-2 border border-light text-light rounded-md"
                  >
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
