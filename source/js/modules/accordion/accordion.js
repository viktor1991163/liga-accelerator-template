let menu = document.querySelector('.menu__container');
let communication = document.querySelector('.communication__container');


menu.classList.remove('accordion--nojs');
menu.classList.add('accordion--closed');
communication.classList.remove('accordion--nojs');
communication.classList.add('accordion--closed');

document.querySelectorAll('.btn-acc').forEach(function (target) {
  target.addEventListener('click', function (event) {
    document.querySelectorAll('.accordion').forEach(function (tab) {
      tab.classList.remove('accordion--oppened');
      tab.classList.add('accordion--closed');
    });
    event.target.closest('.accordion').classList.add('accordion--oppened');
    event.target.closest('.accordion').classList.remove('accordion--closed');
  });
});
