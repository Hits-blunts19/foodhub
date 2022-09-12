let navbarDiv = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 
    || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng')
    }
});



const prevIcon = '<span class="prev"><i class="fa-solid fa-arrow-up"></i></span>';
const nextIcon = '<span class="next"><i class="fa-solid fa-arrow-down"></i></span>';