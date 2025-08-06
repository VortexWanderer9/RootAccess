
  document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector(".progress-fill");
          const percent = entry.target.getAttribute("data-percent");
          fill.style.width = percent + "%";
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.4
    });

    skills.forEach(skill => observer.observe(skill));
  });

