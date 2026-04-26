function Projects() {
  const projectList = [
    {
        title: "Quiz App",
        description:"An interactive quiz application that presents questions one at a time and lets users move through the quiz while selecting answers. This project highlights my work with frontend logic, user interaction, and building simple responsive interfaces.",
        tech: "React, JavaScript, CSS",
        link: "https://itzjohn2o1.github.io/Quiz-app/",
        image: "../src/img/Screenshot 2026-04-25 at 21-58-12 .png"
    },
    {
        title: "React Native Exercise App",
        description: "A React Native exercise app that focuses on navigation and routing between different workout views. Users can start from the home screen and move through exercise options like push ups, planks, and sit ups, showing my work with app flow and interactive structure.",
        tech: "React Native, JavaScript, Navigation",
        image: "../src/img/Screenshot 2026-04-25 at 22-04-47 Home.png",
        link: "https://itzjohn2o1.github.io/React-Native-Exercise-App/",
    },
    {
        title: "Expo Todo List",
        description: "A simple task management app that allows users to add tasks and mark them as completed. This project demonstrates my work with interactive state, form input handling, and building functional mobile-style interfaces.",
        tech: "React Native, Expo, JavaScript",
        image: "../src/img/Screenshot 2026-04-25 at 22-14-47 todo-rn.png",
        link: "https://itzjohn2o1.github.io/Expo_Todo_List/",
}
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <p>Here are a few projects that showcase my skills and experience.</p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;