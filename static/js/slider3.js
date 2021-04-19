const slider3 = document.querySelector('.content1__third-slider');
const indicatorParent3 = document.querySelector('.content1__third-control ul'); 
const indicators3 = document.querySelectorAll('.content1__third-control li');
index = 0;

indicators3.forEach((indicator3, i) => {
  indicator3.addEventListener('click', () => {
    document.querySelector('.content1__third-control .content1__selected').classList.remove('content1__selected');
    indicator3.classList.add('content1__selected');
    slider3.style.transform = 'translateX(' + (i) * -50 + '%)';  
    index = i;
    
  });
});
/*
left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.content1__control .content1__selected').classList.remove('content1__selected');
  indicatorParent.children[index].classList.add('content1__selected');
  slider.style.transform = 'translateX(' + (index) * -50 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 4 - 1) ? index+1 : 3;
  document.querySelector('.content1__control .content1__selected').classList.remove('content1__selected');
  indicatorParent.children[index].classList.add('content1__selected');
  slider.style.transform = 'translateX(' + (index) * -50 + '%)';
});

*/