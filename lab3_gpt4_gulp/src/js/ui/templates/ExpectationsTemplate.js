export const createFutureImage = ({src}) => {
  const template  = `
    <img class="future_image" src=  ${src} />
  `;
  return  template;
};

export const createrightContainer = ({title,header,content}) => {
  const template  = `
    <div class = "right_container2">
            <p  class="right_cta">${title}</p>
            <h2 class="right__header">
            ${header}
            </h2>
            <p class="content_bed">
            ${content}
            </p>
      </div>

  `;
  return  template;
};


export const createExceptationLink = ({title}) => {
  const template = `
    <a href="#" class="right_cta2">${title}</a>
  `;

  return template;
};

export const createInputsTemplate = (texts) => {
  const textsTemplate = texts
    .map((texts) => createrightContainer(texts))
    .join("");

  const template = `
    <div class="right_container2">
        ${textsTemplate}
    </div>
  `;

  return template;
};

export const ExpectationsTemplate = ({
  src,
  title,
  texts
}) => {
  const imageFuture = createFutureImage(src);
  const descriptionTemplate = createDescriptionTemplate(texts);
  const buttonsTemplate = createInputsTemplate(title);

  const resultTemplate = `
    <section class="section expectations">
        ${imageFuture}
        ${descriptionTemplate}
        ${buttonsTemplate}
      </section>       
    `;

  return resultTemplate;
};
