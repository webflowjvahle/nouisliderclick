// noUISlider
let navLinkNoUiSlider = document.querySelector("[data-nouislider]");
navLinkNoUiSlider.addEventListener("click", function () {
  console.log("navLinkNoUiSlider has been clicked");
  setTimeout(function () {
    // noUiSlider
    const stepSlider = document.querySelector(".c-nouislider_line");
    const rangeBtn1 = document.getElementById("range-btn-1");
    const rangeBtn2 = document.getElementById("range-btn-2");
    const rangeBtn3 = document.getElementById("range-btn-3");
    const priceTag = document.querySelector(".c-price-txt");

    rangeBtn1.addEventListener("click", function () {
      stepSlider.noUiSlider.set(16.66);
    });

    rangeBtn2.addEventListener("click", function () {
      stepSlider.noUiSlider.set(50.0);
    });

    rangeBtn3.addEventListener("click", function () {
      stepSlider.noUiSlider.set(83.33);
    });

    noUiSlider.create(stepSlider, {
      start: [16.66],
      connect: "lower",
      padding: [16.66, 16.66],
      snap: true,
      range: {
        min: 16.66,
        "16.66%": 16.66,
        "50%": 50.0,
        "83.33%": 83.33,
        max: 100.0,
      },
    });

    stepSlider.noUiSlider.on("update", function (values, handle) {
      rangeBtn1.classList.remove("cc-active");
      rangeBtn2.classList.remove("cc-active");
      rangeBtn3.classList.remove("cc-active");
      switch (values[handle]) {
        case "16.66":
          // deactivate other tabs, activate the first one
          rangeBtn1.classList.add("cc-active");
          priceTag.innerHTML = "2000 €";
          break;
        case "50.00":
          // deactivate other tabs, activate the second one
          rangeBtn2.classList.add("cc-active");
          priceTag.innerHTML = "5000 €";
          break;
        case "83.33":
          // deactivate other tabs, activate the third one
          rangeBtn3.classList.add("cc-active");
          priceTag.innerHTML = "7500 €";
          break;
        default:
          // deactivate other tabs, activate the first one
          rangeBtn1.classList.add("cc-active");
          priceTag.innerHTML("2000 €");
          break;
      }
    });
  }, 400);
});
