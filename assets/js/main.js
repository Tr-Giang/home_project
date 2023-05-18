

let app = {
    showHideMenu: function () {
        let btnNav = document.querySelector('.header__btn__item:last-child');
        let navBar = document.querySelector('.header__navbar');
        let navBarItems = document.querySelectorAll('.header__navbar__item');
        let overlay = document.querySelector('.overlay');
        btnNav.onclick = function () {
            if (!navBar.classList.contains('show__in')) {
                navBar.classList.add('show__in');
                overlay.style.display = 'block';

            } else {
                navBar.classList.remove('show__in');
                overlay.style.display = 'none';

            }

        };

        navBarItems.forEach((navBarItem) => {
            navBarItem.onclick = function () {
                if (navBar.classList.contains('show__in')) {
                    navBar.classList.remove('show__in');
                    overlay.style.display = 'none';

                }
            };
        });


        overlay.onclick = function () {
            if (navBar.classList.contains('show__in')) {
                navBar.classList.remove('show__in');
                overlay.style.display = 'none';

            }
        };



    },

    handleVideo: function () {
        let overlayVideoNode = document.querySelector('.video__overlay');
        let videoNode = document.querySelector('#introduction');
        overlayVideoNode.onclick = function () {
            videoNode.play();
        };

        videoNode.onplay = function () {
            overlayVideoNode.style.display = 'none';
        };
        videoNode.onpause = function () {
            overlayVideoNode.style.display = 'flex';
        };
    },
};
function start() {
    app.showHideMenu();
    app.handleVideo();
}

start();
