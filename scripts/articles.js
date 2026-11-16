const articlesDiv = document.getElementById("div-articles");
const articleCountDiv = document.getElementById("article-count-div");

async function loadArticles() {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=tyleruploads&page=1&per_page=100",
    );

    if (!response.ok) throw new Error("DEV Community API Request failed");

    const articles = await response.json();

    articleCountDiv.innerHTML = `<p id="article-count"><strong>${articles.length}</strong> Total Articles</p>`;

    articlesDiv.innerHTML = articles
      .map(
        (article) => `
        <div class="article-card">
          ${
            article.cover_image
              ? `<img src="${article.cover_image}" alt="${article.title}" class="article-cover" loading="lazy">`
              : `<div class="article-cover-fallback" aria-hidden="true">
                 <div class="fallback-box">${article.title}</div>
               </div>`
          }
          <h3>
            <a href="${article.url}" target="_blank" rel="noopener">${article.title}</a>
          </h3>
          <div class="article-meta">
              <span class="article-publish-date">
                Published:
                <time datetime="${article.published_timestamp}" title="${new Date(article.published_timestamp.toLocaleString())}">
                    ${new Date(article.published_timestamp).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                </time>
              </span>
              <span>${article.reading_time_minutes} min read</span>
          </div>
          <div class="tags">
            ${article.tag_list.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      `,
      )
      .join("");
  } catch (error) {
    console.warn("Could not retrieve articles: ", error);
  }
}

document.addEventListener("DOMContentLoaded", loadArticles);
