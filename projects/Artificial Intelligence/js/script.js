var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
       pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
        1660: {
            slidesPerView: 5,
        }
      }
    });


    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.header__menu');

    menuBtn.addEventListener('click',function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    });

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }