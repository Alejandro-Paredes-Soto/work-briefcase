const btn_toggle= document.getElementById('btn-toggle');
const pop = document.getElementById('pop');
const nav = document.getElementById('nav');
const btn_close = document.getElementById('btn-close');
btn_toggle.addEventListener('click', ()=>{

    pop.classList.add('show');
nav.classList.add('ocult');


})


btn_close.addEventListener('click', ()=>{
    pop.classList.remove('show');
    nav.classList.remove('ocult');
})