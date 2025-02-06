const skills = [
  { icon: 'fab fa-html5', name: 'HTML5' },
  { icon: 'fab fa-css3-alt', name: 'CSS3' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fas fa-code', name: 'TypeScript' },
  { icon: 'fab fa-react', name: 'React' },
  { icon: 'fab fa-vuejs', name: 'VueJS' },
  { icon: 'fas fa-wind', name: 'Tailwind CSS' },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
  { icon: 'fab fa-git-alt', name: 'Git' },
];

const Skills = () => {
  return (
    <section className="relative bg-gray-800 text-white py-6 px-4 rounded-lg shadow-md max-w-xl mx-auto -mt-12">
      <div className="flex justify-center gap-6 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-4xl text-gray-400 hover:text-primary transition"
          >
            <i className={skill.icon} title={skill.name}></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
