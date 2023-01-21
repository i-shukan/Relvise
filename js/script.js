function myFunction(num) {
    document.querySelector('.links__row').children[num-1].querySelector(".links__list").classList.toggle("_show");
  }
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(event) {
    if (!event.target.matches('.links__title')) {
      var dropdowns = document.getElementsByClassName("links__list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('_show')) {
          openDropdown.classList.remove('_show');
        }
      }
    }
  }