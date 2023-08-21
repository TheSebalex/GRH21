const PRINCIPAL_SLIDER = document.getElementById("slider-companies");
let idInterval = setInterval(() => {
  moveSlider(PRINCIPAL_SLIDER, "2");
}, 1500);
let timeoutID;

document.addEventListener("click", (e) => {
  let target = e.target;

  if (target.classList.contains("slider-arrow")) {
    clearInterval(idInterval);
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      idInterval = setInterval(() => {
        moveSlider(PRINCIPAL_SLIDER, "2");
      }, 1500);
    }, 500);

    switch (target.getAttribute("data-value")) {

      case "1":
        moveSlider(target.nextElementSibling, "1");
        break;

      case "2":
        moveSlider(target.previousElementSibling, "2");
        break;
    }
  }
});

function moveSlider(slider, direction) {
  let currentScroll = parseInt(slider.getAttribute("data-value"));
  let childWidth = slider.firstElementChild.clientWidth;
  let childElement = slider.childElementCount - 3;
  const SET_ATTR= (a)=>{
    return slider.setAttribute("data-value", a)
  }

  slider.scroll(0, 0);

  switch (direction) {
    case "1":
      if (currentScroll > 0 && currentScroll != 0) {
        SET_ATTR(currentScroll - 1);
      } else if (currentScroll === 0) {
        SET_ATTR(childElement);
      }
      break;

    case "2":
      if (currentScroll < childElement && currentScroll != childElement) {
        SET_ATTR(currentScroll + 1);
      } else if (currentScroll == childElement) {
        SET_ATTR(0);
      }
      break;
  }
  currentScroll = parseInt(slider.getAttribute("data-value"));

  slider.scroll(currentScroll * childWidth, 0);
}


