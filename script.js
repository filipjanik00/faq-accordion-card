// Second Button Clicked Every Reload
document.addEventListener("DOMContentLoaded", function () {
  const secondBtn = document.querySelector(".question__btn-2");
  secondBtn.click();
});

const btns = document.querySelectorAll(".question__btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle("show-text");

    const arrowSpan = parent.querySelector(".arrow-down img");
    const isOpen = parent.classList.contains("show-text");
    arrowSpan.classList.toggle("rotate-180", isOpen);

    const questionTitle = parent.querySelector(".question__title h2");
    questionTitle.style.fontWeight = isOpen
      ? "var(--fw-bold)"
      : "var(--fw-regular)";
  });
});
