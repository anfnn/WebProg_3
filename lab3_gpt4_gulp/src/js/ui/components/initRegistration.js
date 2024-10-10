import RegistrationData from "../../mockData/RegistrationData.js";
import { RegistrationTemplate } from "../templates/RegistrationTemplate.js";


const initRegistration = (RegistrationNode) => {
    RegistrationNode.insertAdjacentHTML(
      "beforeend",
      RegistrationTemplate(RegistrationData)
    );
};
  
  export default initRegistration;