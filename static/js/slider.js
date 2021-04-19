const slider = document.querySelector('.content1__first-slider');
const indicatorParent = document.querySelector('.content1__first-control ul'); 
const indicators = document.querySelectorAll('.content1__first-control li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.content1__first-control .content1__selected').classList.remove('content1__selected');
    indicator.classList.add('content1__selected');
    slider.style.transform = 'translateX(' + (i) * -50 + '%)';  
    index = i;
    
  });
});