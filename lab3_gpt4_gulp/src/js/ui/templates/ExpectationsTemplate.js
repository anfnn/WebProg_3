
export const ExpectationsTemplate = ({
  img,
  cta,
  header,
  text,
  button
}) => {

  const resultTemplate = `
       <img class="future_image" src="${img.src}" alt=${img.alt} />
          <div class = "right_container2">
            <p  class="right_cta">${cta}</p>
            <h2 class="right__header">
            ${header}
            </h2>
            <p class="content_bed">
            ${text}
            </p>
            <a href="${button.href}" class="right_cta2">${button.text}</a>
          </div>
    `;

  return resultTemplate;
};

