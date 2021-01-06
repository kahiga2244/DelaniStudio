//    what we do section
$('.main').click(function () {
  $(this).children('.display').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
// giving feedback to the customer
$("button").click(function (stone) {
  var client = document.getElemenuttontById('nameDetail').value;
  alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
  omonge.preventDefault();
});
//    reset my form button
$("button").on('click', function () {
  $('form').each(function () {
    this.reset();
  });
});
//portifolio section
$(".card").hover(function () {
  $(this).children(".card-1").fadeToggle(1000, "linear");
});

function showStuff() {
  let hidden = document.getElementById('hidden');
  if (hidden.style.display == "none") {
    hidden.style.display = "block"
  } else {
    hidden.style.display = "none"
  }
}
