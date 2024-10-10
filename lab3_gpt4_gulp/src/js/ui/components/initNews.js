import NewsData from "../../mockData/NewsData.js";
import { NewsTemplate } from "../templates/NewsTemplate.js";


const initNews = (NewsNode) => {
    NewsNode.insertAdjacentHTML(
      "beforeend",
      NewsTemplate(NewsData)
    );
};
  
  export default initNews;