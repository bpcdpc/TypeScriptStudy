async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error #1: ${response.status}`);
    }
    const data = response.json();
    return data;
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
        if (error instanceof Error) {
            console.log(`Error #2: ${error.message}`);
        }
        else {
            console.log("Error #2: Unknown Error");
        }
    }
}
movies();
export {};
