const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const faqQuestion = item.querySelector(".faq-question");
    const faqAnswer = item.querySelector(".faq-answer");
    const iconPlus = item.querySelector(".icon-plus");
    const iconMinus = item.querySelector(".icon-minus");

    faqQuestion.addEventListener("click", () => {

        const isActive = faqAnswer.classList.contains("active");

        faqAnswer.classList.toggle("active");

        if (isActive) {
            iconPlus.style.display = "block";
            iconMinus.style.display = "none";
        } else {
            iconPlus.style.display = "none";
            iconMinus.style.display = "block";
        }
    });
});
