// SHOULD BE IMPORTED AS A DEFER SCRIPT

// ID OF MAIN PAGE CONTENT SHOULD BE 'page-content'

document.addEventListener("DOMContentLoaded", () => {
  const rawContent = document.getElementById("page-content");
  if (!rawContent) {
    console.error("FATAL ERROR: tag with ID page-content not found");
    return;
  }

  const goatScript = document.createElement("script");
  goatScript.src = "//gc.zgo.at/count.js";
  goatScript.async = true;
  goatScript.setAttribute(
    "data-goatcounter",
    "https://tyler-n.goatcounter.com/count",
  );
  document.head.appendChild(goatScript);

  // Create container for top of site
  const container = document.createElement("div");
  container.id = "site-layout";

  const header = document.createElement("header");
  buildNavBar(header);

  const footer = document.createElement("footer");
  footer.innerHTML = "© Tyler N. MIT License";

  container.appendChild(header);
  container.appendChild(rawContent);
  container.appendChild(footer); 

  document.body.appendChild(container);
});

function buildNavBar(headerElement) {
  const nav = document.createElement("nav");
  headerElement.appendChild(nav);

  fetch("nav.json")
    .then((response) => response.json())
    .then((data) => {
      data.tools.forEach((tool) => {
        const link = document.createElement("a");
        link.href = tool.url;
        link.textContent = tool.name;

        link.style.color = "#ffffff";
        link.style.marginRight = "15px";

        nav.appendChild(link);
      });
    })
    .catch((err) => console.error("Error loading navigation config: ", err));
}
