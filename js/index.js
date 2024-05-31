const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faqItem) => {
  const question = faqItem.querySelector(".faq-question");
  const answer = faqItem.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    faqItem.classList.toggle("active");
    answer.classList.toggle("show");
  });
});


const navBar = document.querySelector(".header .navbar")
const navButton = document.querySelector(".header .Menu")

navButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

document.onscroll = () => {
    navBar.classList.remove("active")
    if (window.scrollY > 0) {
        document.querySelector(".header").classList.add("active")
    }
    else {
          document.querySelector(".header").classList.remove("active")
    }
}
