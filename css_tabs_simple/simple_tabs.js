(function() {
  function main() {
    var tabButtons = Array.from(document.querySelectorAll('.simple-tabs__btn'));

    tabButtons.map(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.simple-tabs__btn.active').classList.remove('active');
        button.classList.add('active');

        document.querySelector('.simple-tabs__pane.active').classList.remove('active');
        document.querySelector(button.getAttribute('href')).classList.add('active');
      });
    });
  }

  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
})();
