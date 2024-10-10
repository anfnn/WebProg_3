
export const NewsTemplate = ({
    header,
    header2
  }) => {
  
    const resultTemplate = `
     <section class="section News">
        <h1 class = "passing" >${header}<br>${header2}</h1>
      </section>  
      `;
  
    return resultTemplate;
  };
  
  