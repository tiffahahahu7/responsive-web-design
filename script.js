$(document).ready(function () {
  const navbar = $('#navbar')

  // Store the initial position of the navbar
  const navbarOffset = navbar.offset().top

  $(window).scroll(function () {
    if ($(window).scrollTop() >= navbarOffset) {
      navbar.addClass('sticky')
    } else {
      navbar.removeClass('sticky')
    }
  })
})
