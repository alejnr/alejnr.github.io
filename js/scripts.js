AOS.init();

document.getElementById("currentYear").innerHTML = new Date().getFullYear();

var mybutton = document.getElementById("top-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

document.addEventListener('DOMContentLoaded', function() {

  const selector = '.nav-link';
  const elems = Array.from(document.querySelectorAll(selector));
  const navigation = document.querySelector('nav');

  function makeActive(evt) {
    const target = evt.target;

     if (!target || !target.matches(selector)) {
       return;
     }

    elems.forEach(elem => elem.classList.remove('active'));
    evt.target.classList.add('active');
  };

  navigation.addEventListener('mousedown', makeActive);

});
