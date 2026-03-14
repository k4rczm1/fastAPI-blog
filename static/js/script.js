document.querySelectorAll(".post-card, .content-section").forEach(post => {
  post.style.opacity = "0";
  post.style.transform = "translateY(20px)";
  post.style.transition = "all 0.4s ease";

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      post.style.opacity = "1";
      post.style.transform = "translateY(0)";
    }
  });

  observer.observe(post);
});

