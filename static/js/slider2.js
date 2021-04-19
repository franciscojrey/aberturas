const slider2 = document.querySelector('.content1__second-slider');
const indicatorParent2 = document.querySelector('.content1__second-control ul'); 
const indicators2 = document.querySelectorAll('.content1__second-control li');
index = 0;

indicators2.forEach((indicator2, i) => {
  indicator2.addEventListener('click', () => {
    document.querySelector('.content1__second-control .content1__selected').classList.remove('content1__selected');
    indicator2.classList.add('content1__selected');
    slider2.style.transform = 'translateX(' + (i) * -50 + '%)';  
    index = i;
    
  });
});
