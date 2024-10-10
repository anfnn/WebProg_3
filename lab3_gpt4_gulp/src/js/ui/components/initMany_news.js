import Many_newsData from "../../mockData/Many_newsData.js";
import { Many_newsTemplate } from "../templates/Many_newsTemplate.js";


const initMany_news = (Many_newsNode) => {
    Many_newsNode.insertAdjacentHTML(
      "beforeend",
      Many_newsTemplate(Many_newsData)
    );
};
  
  export default initMany_news;