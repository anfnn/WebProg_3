import ExpectationsData from "../../mockData/ExpectationsData.js";
import { ExpectationsTemplate } from "../templates/ExpectationsTemplate.js";


const initExpectations = (ExpectationseNode) => {
    ExpectationseNode.insertAdjacentHTML(
      "beforeend",
      ExpectationsTemplate(ExpectationsData)
    );
};
  
  export default initExpectations;