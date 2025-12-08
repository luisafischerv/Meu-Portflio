const menu_incon = document.querySelector('.fa-bars');
const navlinks = document.querySelector('.nav-links');

menu_incon.onclick = () => {
    navlinks.classList.toggle('active');
}