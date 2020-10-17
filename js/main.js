// Sticky Menu Navbar
window.addEventListener('scroll', function () {
  if (window.screenY > 150) {
    document.querySelector('#navbar').style.opacity = 0.5;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 80,
      },
      800
    );
  }
});
