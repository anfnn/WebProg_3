
export const RegistrationTemplate = ({
    text1,
    text2,
    button
  }) => {
  
    const resultTemplate = `
       <section class = "section registration">
          <div class = "description_registration">
            <p class = "short_words">
            ${text1}
            </p>
            <p class = "big_words">
            ${text2}
            </p>
          </div>
          <button class = "start">${button}</button>
      </section>
      `;
  
    return resultTemplate;
  };
  
  