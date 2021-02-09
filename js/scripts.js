var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 2000,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });



  const headerSection = document.querySelector('#headerSection');
  const headerHum = document.querySelector('#headerSection .hum');
  const headerOverlay = document.querySelector('#headerSection .nav-overlay');


  
  headerHum.addEventListener('click', ()=>{
    headerSection.classList.toggle('change');
  });
  headerOverlay.addEventListener('click', ()=>{
    headerSection.classList.toggle('change');
  });