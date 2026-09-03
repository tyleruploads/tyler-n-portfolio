// SHOULD BE IMPORTED AS A DEFER SCRIPT

// ID OF MAIN PAGE CONTENT SHOULD BE 'page-content', AND SET TO DISPLAY: NONE

/*
TODO: if the site should not flash white (blank) while loading:
 * 1. add <link rel="stylesheet" href="shared/css/base.css"> to the head of
 *    index.html, about.html, contact.html, and projects.html.
 * 2. remove the dynamically-created base.css link below.
 * 3. remove the styleLink.onload/styleLink.onerror reveal logic below.
 * 4. remove style="display: none" from page-content in the pages that use it.
 * after reading/fixing, delete this comment block!
*/

document.addEventListener("DOMContentLoaded", () => {
    const rawContent = document.getElementById("page-content");
    if (!rawContent) {
        console.error("FATAL ERROR: tag with ID page-content not found");
        return;
    }

    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "shared/css/base.css";
    document.head.appendChild(styleLink);

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

    styleLink.onload = () => {
        rawContent.style.display = "";
    };

    styleLink.onerror = () => {
        console.error("CSS failed to load, revealing unstyled content");
        rawContent.style.display = "";
    };

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
        .catch((err) =>
            console.error("Error loading navigation config: ", err),
        );
}
