const classToggle = (burger, burgerEl, nav, body) => {

    burger.addEventListener('click', (e) =>{
        if(e){  
            nav.classList.toggle('active');
            body.classList.toggle('active');
            console.log(burger);
        
            for(let value of burgerEl.values()){
                value.classList.toggle('close');}
        }
        else{
        console.log('error' + e);
        }
    })
}

let burger = document.querySelector('.burger');
let burgerEl = document.querySelectorAll('span.burger-el');
let nav = document.querySelector('nav');
let body = document.body;

classToggle(burger, burgerEl, nav, body);


// items fade in on scroll 
let items = document.querySelectorAll(".wrapper-grid-main-element,  .wrapper-flex-sub-element div, .wrapper-grid-sub-element-img-desc div, .promo-text-section");
let options = {threshold:0.6};

let observer = new IntersectionObserver(
    (entries, observer) => {

    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            console.log('entry isnt intersecting');}
        else{
            //console.log(entry.target) + console.log(entry.isIntersecting)
            entry.target.classList.toggle('fadein')
            observer.unobserve(entry.target);
        }});
    }, options);

    items.forEach(item => {
        observer.observe(item);
    });

    let listItems = document.querySelectorAll('#main-nav ul li');
    for(let item of listItems.values()){
        item.addEventListener('click', () =>{
            body.classList.remove('active');
            nav.classList.remove('active');
                
            for(let value of burgerEl.values()){
                value.classList.toggle('close');
            }
        })
    }