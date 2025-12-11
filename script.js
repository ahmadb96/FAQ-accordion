const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon");

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // بستن سایر آیتم‌ها
    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      faq.querySelector(".faq-icon").src = "./images/icon-plus.svg";
    });

    // باز یا بسته کردن آیتم فعلی
    if (!isOpen) {
      item.classList.add("active");
      trigger.setAttribute("aria-expanded", "true");
      icon.src = "./images/icon-minus.svg";
    } else {
      trigger.setAttribute("aria-expanded", "false");
      icon.src = "./images/icon-plus.svg";
    }
  });
});
