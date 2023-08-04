let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let plants = document.getElementById('plants');
let t1 = document.getElementById('t1');
let man = document.getElementById('man');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    m1.style.marginTop = value * 2.5 + 'px';
    m2.style.top = value * 1.5 + 'px';
    t2.style.left = value * 1.5 + 'px';
    t1.style.left = value * 1.5 + 'px';
    man.style.left = value * 1.5 + 'px';
    plants.style.top = value * 1 + 'px';
})
