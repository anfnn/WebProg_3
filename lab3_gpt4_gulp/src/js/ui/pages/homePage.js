import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExpectations from "./../components/initExpectations.js";
import initRegistration from "./../components/initRegistration.js";
import initNews from "./../components/initNews.js";
import initMany_news from "./../components/initMany_news.js";
import initfooter from "../components/initfooter.js";
import initBurger from "./../components/initBurger.js";


const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section expectations"></section>
    <section class="section registration"></section>
    <section class="section News"></section>
    <section class="section many_news"></section>
    <footer></footer>





  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  const ExpectationseNode = rootNode.querySelector(".expectations");
  initExpectations(ExpectationseNode);

  const RegistrationNode = rootNode.querySelector(".registration");
  initRegistration(RegistrationNode);

  const NewsNode = rootNode.querySelector(".News");
  initNews(NewsNode);

  const Many_newsNode = rootNode.querySelector(".many_news");
  initMany_news(Many_newsNode);

  const footerNode = rootNode.querySelector("footer");
  initfooter(footerNode);


  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
