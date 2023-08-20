const SLIDER_MAIN_ELEMENT = document.getElementById("slider-companies");

const SLIDER_COMPANIES_IMG = [
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
  `./css/src/sliderImgs/Recurso4.svg`,
];

function insertCompaniesImg() {
  for (let i = 0; i < SLIDER_COMPANIES_IMG.length - 1; i++) {
    let divToInsert = `
    <div><div style="background-image: url(${SLIDER_COMPANIES_IMG[i]}); background-size: cover; background-position: center"></div></div>
    `;
    SLIDER_MAIN_ELEMENT.insertAdjacentHTML("beforeend", divToInsert);
  }
}

insertCompaniesImg();
