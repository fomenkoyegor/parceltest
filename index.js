import jquery from "jquery";
import 'bootstrap';

export default (window.$ = window.jQuery = jquery);


const menu = $('.menu');
const burger = $('.burger');
const section = $('section');
const upBtn = $('.up');

upBtn.on("click",e=>{
    $('html, body').animate({
                    scrollTop: 0
                }, 600);
});
burger.on("click", e => {
    burger.toggleClass('show');
    menu.toggleClass('show');
});
