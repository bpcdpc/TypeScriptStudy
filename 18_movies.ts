interface Movie {
  title: string;
  url: string;
  image: string;
  authorName: string;
  authorUrl: string;
  authorImage: string;
  createTime: string;
}

interface MovieInfo {
  articleList: Array<Movie>;
  lastPublishTime: string;
  moreList: boolean;
}

interface MovieRank {
  rank: number;
  title: string;
}

async function fetchData(url: string): Promise<MovieInfo> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error #1: ${response.status}`);
  }
  const data: Promise<MovieInfo> = response.json();
  return data;
}

function validateData(data: MovieInfo) {
  if (!data) {
    throw new Error("No data.");
  }
  if (!data.articleList || data.articleList.length === 0) {
    throw new Error("No article.");
  }
}

function extractData(articles: Array<Movie>): Array<MovieRank> {
  return articles.map((article, index) => ({
    rank: index + 1,
    title: article.title,
  }));
}

function printData(result: Array<MovieRank>) {
  for (let movie of result) {
    console.log(`[${movie.rank}위] ${movie.title}`);
  }
}

const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

async function movies(): Promise<void> {
  try {
    const data: MovieInfo = await fetchData(url);
    validateData(data);
    const result: Array<MovieRank> = extractData(data.articleList);
    printData(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`Error #2: ${error.message}`);
    } else {
      console.log("Error #2: Unknown Error");
    }
  }
}

movies();
