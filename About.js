const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const popupForm = document.getElementById("popupForm");

    openPopup.addEventListener("click", (e) => {
      e.preventDefault();
      popupForm.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
      popupForm.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === popupForm) {
        popupForm.style.display = "none";
      }
    });

    // Optional: show success message after submission
    const form = document.querySelector("form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        document.getElementById("form-success").style.display = "block";
        form.reset();
      }
    });