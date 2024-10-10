import footerData from "../../mockData/footerData.js";
import { footerTemplate } from "../templates/footerTemplate.js";


const initfooter= (footerNode) => {
    footerNode.insertAdjacentHTML(
      "beforeend",
      footerTemplate(footerData)
    );
};
  
  export default initfooter;