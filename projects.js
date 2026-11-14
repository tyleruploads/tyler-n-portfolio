const projectsDiv = document.getElementById("div-projects");

const PROJECTS_ARR = 
[
    {
        "name": "MDEZ++",
        "url": "https://github.com/tyleruploads/mdez",
        "description": "An open-source, lightweight, cross-platform C++20 and Qt GUI Markdown editor. Instead of a WYSIWYG editor, MDEZ++ renders a real-time live preview of your text in a split-screen pane using a fast, native, and minimal GUI.",
        "techStack": [
            "C++",
            "Qt Framework",
            "GitHub Actions"
        ]
    },
    {
        "name": "Corpustein",
        "url": "https://github.com/tyleruploads/corpustein",
        "description": "A blazingly fast N-gram Markov Chain model with a configurable order and a rolling window system. It is coded only in the C++20 Standard Library, which makes it small and fast. It even uses an alternate terminal buffer to make it look sleek and beautiful.",
        "techStack": [
            "C++20",
            "C++ STL",
            "CMake",
            "GitHub Actions"
        ]
    },
    {
        "name": "CodeWare",
        "url": "https://github.com/tyleruploads/code-ware",
        "description": "A WarioWare-style video game where you have to complete various minigames, written in Godot. Do as good as you can, time is tight. 5 lives, 5 chances.",
        "techStack": [
            "Godot",
            "GitHub Actions"
        ]
    },
    {
        "name": "pywikiscrape",
        "url": "https://github.com/tyleruploads/pywikiscrape",
        "description": "A user-friendly but powerful open-source Wikipedia scraper written in Python that lets users export articles in any language to an SQLite3 database using Beautiful Soup.",
        "techStack": [
            "Python",
            "CLI",
            "Web Scraping",
            "Requests",
            "BeautifulSoup"
        ]
    },
    {
        "name": "devtkit",
        "url": "https://github.com/tyleruploads/devtkit",
        "description": "An open-source DEV tool kit written in Python that lets users export information gathered from the DEV.to API.",
        "techStack": [
            "Python",
            "Requests",
            "REST API",
            "CLI"
        ]
    },
    {
        "name": "TN Search",
        "url": "https://github.com/tyleruploads/tn-search",
        "description": "A New Tab Page offering over 50 search engines and tools for various workflows, built for developers, by a developer.",
        "techStack": [
            "HTML5",
            "CSS3",
            "JavaScript"
        ]
    },
    {
        "name": "t-n-wx",
        "url": "https://github.com/tyleruploads/t-n-wx",
        "description": "Tactical Noteworthy Weather eXtension: the only legal way to get your weather. A simple, totally safe and private website designed by Department t-n-wx.",
        "techStack": [
            "HTML5",
            "CSS3",
            "JavaScript"
        ]
    },
    {
        "name": "montykit",
        "url": "https://github.com/tyleruploads/montykit",
        "description": "A general-purpose Python utility kit.",
        "techStack": [
            "Python",
            "Pytest",
            "PyPI"
        ]
    },
    {
        "name": "tylereq",
        "url": "https://github.com/tyleruploads/tylereq",
        "description": "A simple equations module made by Tyler.",
        "techStack": [
            "Python",
            "PyTest",
            "PyPI"
        ]
    },
    {
        "name": "tyler-n-portfolio",
        "url": "https://github.com/tyleruploads/tyler-n-portfolio",
        "description": "A lightweight, open-source personal developer portfolio telling my story and showcasing my projects, built with semantic HTML5 and no frameworks.",
        "techStack": [
            "HTML5",
            "CSS",
            "JavaScript"
        ]
    }
];

function loadProjects() {
    projectsDiv.innerHTML = PROJECTS_ARR.map(
        (project) => `
            <div class="project-card">
                <h3>
                    <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}</a>
                </h3>
                <p>${project.description}</p>
                <div class="project-tech-stack">
                    ${project.techStack.map((tech) => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `
    ).join("");
}

document.addEventListener("DOMContentLoaded", loadProjects);
