const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});


// ScrollSpy logic

const sections = document.querySelectorAll("header[id], section[id]");
const navLinks = document.querySelectorAll(".sidebar a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          )
        })
      }
    })
  },
  {
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0
  }
);

sections.forEach(section => observer.observe(section));