const slider = document.querySelector('.movies-slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    const slideWidth = document.querySelector('.movie').offsetWidth;
    slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    const slideWidth = document.querySelector('.movie').offsetWidth;
    slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
});