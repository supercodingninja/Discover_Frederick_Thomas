'use strict';

(function ($) {
  $(document).ready(function () {

    var mainMenuSub = $('.nav-menu .sub-menu').find("ul a:first-child li");

    $(mainMenuSub).hover(function () {
      $('.nav-menu .sub-menu').addClass("menu-caret-hover");
    }, function () {
      $('.nav-menu .sub-menu').removeClass("menu-caret-hover");
    });
  });
})(jQuery);
'use strict';

/**
 * @file
 * Scripts for the main menu component
 *
 * TODO: This file is ignored in .eslintignore because it has too many errors to
 * easily fix.  That's a short term solution though; the formatting in this file
 * should ultimately be updated.
 */
(function () {

  "use strict";

  // All the JavaScript for this file.

  /* Navigation functions */

  function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  var element = document.getElementById('menu-toggle');

  if (element != null) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      if (document.body.classList.contains('nav-is-active')) {
        document.body.classList.remove('nav-is-active');
        var subMenus = document.getElementsByClassName('sub-menu');
        var len = subMenus.length;

        for (var i = 0; i < len; i++) {
          // clean up on menu close
          var buttonId = 'button-for-' + subMenus[i].getAttribute('id');
          document.getElementById(buttonId).remove();
          subMenus[i].removeAttribute('id');
          subMenus[i].removeAttribute('aria-expanded');
          subMenus[i].parentNode.classList.remove('has-children');
        }
      } else {
        document.body.classList.add('nav-is-active');
        if (document.getElementsByClassName('sub-menu')) {

          var subMenus = document.getElementsByClassName('sub-menu');
          var len = subMenus.length;

          for (var i = 0; i < len; i++) {

            var anchorText = subMenus[i].parentNode.getElementsByTagName('a')[0].innerHTML;
            var idSlug = anchorText.toLowerCase().replace(/ /g, '-');
            //var randomNumber= Math.floor( Math.random()*9999 );
            var slug = idSlug;

            subMenus[i].setAttribute('id', slug);
            subMenus[i].setAttribute('aria-expanded', 'false');
            subMenus[i].parentNode.classList.add('has-children');

            var subMenuToggle = document.createElement('button');
            subMenuToggle.innerHTML = 'open';
            subMenuToggle.classList.add('ui-toggle-button');
            subMenuToggle.setAttribute('type', 'button');
            subMenuToggle.setAttribute('data-text', 'close');
            subMenuToggle.setAttribute('aria-controls', slug);
            subMenuToggle.setAttribute('id', 'button-for-' + slug);

            var ref = subMenus[i];

            insertAfter(subMenuToggle, ref);

            var button = document.getElementById('button-for-' + slug);
            button.addEventListener('click', function (e) {
              e.preventDefault();

              var targetId = this.getAttribute('aria-controls');
              if (document.getElementById(targetId).getAttribute('aria-expanded') == 'false') {
                document.getElementById(targetId).setAttribute('aria-expanded', 'true');
                subMenuToggle.textContent = 'close';
                subMenuToggle.setAttribute('data-text', 'open');
              } else {
                document.getElementById(targetId).setAttribute('aria-expanded', 'false');
                subMenuToggle.textContent = 'open';
                subMenuToggle.setAttribute('data-text', 'close');
              }
            });
          }
        }
      }
    });
  }
})();

// make dropdown menus tabbable - thanks Scott O'Hara!

/* Need to debug why this is causing errors but don't need it to work for our site */

(function () {

  // Enable strict mode
  "use strict";

  // Local object for method references

  var DropNav = {};

  // Namespace it up yo
  DropNav.ns = "Drop Navigation";

  // the main event...err..function
  DropNav.init = function () {

    var hasDrop = document.querySelectorAll('.nav-menu > .menu-item .sub-menu');
    var hasDropLinks = document.querySelectorAll('.sub-menu a');
    var hasDropCount = hasDrop.length;
    var hasDropLinksCount = hasDropLinks.length;
    var i;

    if (hasDropCount > 0) {

      for (i = 0; i < hasDropCount; i++) {
        // i++  =  i = i + 1

        var drop = hasDrop[i];
        var firstDropLink = drop.querySelectorAll('.sub-menu a')[0];

        drop.parentNode.setAttribute('aria-haspopup', 'true');
        // drop.querySelector('ul').setAttribute('aria-label', 'Sub Menu');
        firstDropLink.innerHTML = ' <span class="visuallyhidden">Sub menu, </span>' + firstDropLink.innerHTML; //*

        drop.addEventListener('focus', function (e) {
          this.parentNode.classList.add('child-has-focus');
        });

        var parentMenuItem = drop.parentNode.children[0];

        parentMenuItem.addEventListener('focus', function (e) {
          this.parentNode.classList.add('child-has-focus');
        });

        parentMenuItem.addEventListener('blur', function (e) {
          this.parentNode.classList.remove('child-has-focus');
        });
      } //for

      for (i = 0; i < hasDropLinksCount; i++) {

        var dropLinks = hasDropLinks[i];
        dropLinks.addEventListener('focus', function (e) {
          this.parentNode.parentNode.parentNode.classList.add('child-has-focus');
        });

        dropLinks.addEventListener('blur', function (e) {
          this.parentNode.parentNode.parentNode.classList.remove('child-has-focus');
        });
      } //for
    } //if
  }; //init

  DropNav.init();
})();

/*
  Created Aug 22, 2016

  Revised Aug 23, 2016
  * https://codepen.io/svinkle
  Switched from aria label to adding visually hidden "sub menu" text to the first item in the drop down,
  to ensure that all screen readers would accurately announce "sub menu"

  Fixed z-index of primary link & drop menu to ensure that the primary link always appeared on top of the drop menu

  Reveal drop menu on focus of primary link, to make it more apparent that a sub menu exists.
  Suppose this could have been done with a down arrow on the primary link. but nope :)
*/
//# sourceMappingURL=script.js.map
