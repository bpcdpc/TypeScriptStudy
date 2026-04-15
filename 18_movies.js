async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error #1: ${response.status}`);
    }
    return response.json();
}
function validateData(data) {
    if (!data) {
        throw new Error("No data.");
    }
    if (!data.articleList || data.articleList.length === 0) {
        throw new Error("No article.");
    }
}
function extractData(articles) {
    return articles.map((article, index) => ({
        rank: index + 1,
        title: article.title,
    }));
}
function printData(result) {
    for (let movie of result) {
        console.log(`[${movie.rank}위] ${movie.title}`);
    }
}
const url = "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
async function movies() {
    try {
        const data = await fetchData(url);
        validateData(data);
        const result = extractData(data.articleList);
        printData(result);
    }
    catch (error) {
        console.log(error);
    }
}
movies();
export {};
