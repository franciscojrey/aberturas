/*
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        modal.classList.add("zindex15");
        original.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");
        original.src = `${originalSrc}`;
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove("open");
        modal.classList.remove("zindex15");
        original.classList.remove("open");
    };
});
*/