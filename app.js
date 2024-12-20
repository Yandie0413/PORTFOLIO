const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
  // Quand la souris survole un projet
  project.addEventListener('mouseover', () => {
    projects.forEach((p) => {
      if (p === project) {
        p.classList.add('active');
        p.classList.remove('inactive');
      } else {
        p.classList.add('inactive');
        p.classList.remove('active');
      }
    });
  });

  // Quand la souris quitte le projet
  project.addEventListener('mouseout', () => {
    projects.forEach((p) => {
      p.classList.remove('active', 'inactive');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = `${skillLevel}%`;
  });
});