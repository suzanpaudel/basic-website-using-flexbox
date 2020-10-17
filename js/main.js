// Sticky Menu Navbar
const checkpoint = 100;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1;
  } else {
    opacity = 0.9;
  }

  document.querySelector('#navbar').style.opacity = opacity;
});
// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 65,
      },
      800
    );
  }
});
