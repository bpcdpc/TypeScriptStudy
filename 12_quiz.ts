// 모델링실습
// http:/raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json
// 위의 주소에 응답 JSON을 보고 interface를 사용해서 모델링하시오.

interface Movie {
  title: string;
  url: string;
  image: string;
  authorName: string;
  authorUrl: string;
  authorImage: string;
  createTime: string;
}

interface MovieInfos {
  articleList: Movie[];
  lastPublishTime: string;
  moreList: boolean;
}
