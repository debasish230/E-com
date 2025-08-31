// Smooth scrolling for navigation
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Close hamburger menu on link click
$(".menu-items a").click(function () {
  $("#checkbox").prop("checked", false);
});

// --- Additional Functionalities for Buttons --- //

// Add to Cart buttons
const cartButtons = document.querySelectorAll(".add-cart button");
cartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("✅ Item added to cart!");
  });
});

// Buy Now buttons
const buyButtons = document.querySelectorAll(".buy-now button");
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("🛒 Redirecting to checkout...");
    // window.location.href = "checkout.html"; // Uncomment to redirect
  });
});

// Newsletter subscribe
const subscribeBtn = document.querySelector(".content_4 button");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    let email = document.querySelector(".content_4 input[type='email']").value;
    if (email && email.includes("@")) {
      alert("📧 Thanks for subscribing!");
    } else {
      alert("❌ Please enter a valid email!");
    }
  });
}

// Contact form submit
const contactBtn = document.querySelector(".form .form-details button");
if (contactBtn) {
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector(".form .form-details input[type='text']").value;
    let email = document.querySelector(".form .form-details input[type='email']").value;
    let msg = document.querySelector(".form .form-details textarea").value;

    if (name && email.includes("@") && msg) {
      alert("✅ Message sent successfully!");
    } else {
      alert("⚠️ Please fill out all fields correctly.");
    }
  });
}
