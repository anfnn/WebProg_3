
export const RegistrationTemplate = ({
    text1,
    text2,
    text3,
    button
  }) => {
  
    const resultTemplate = `
          <div class = "description_registration">
            <p class = "short_words">
            ${text1}
            </p>
            <p class = "big_words">
            ${text2}  <br>  ${text3} 
            </p>
          </div>
          <button class = "start">${button}</button>      `;
  
    return resultTemplate;
  };
  
  