
// Header Section

const navOpen = document.querySelector('.mobile-open-btn')
const navClose = document.querySelector('.mobile-close-btn')
const primaryNavigation = document.getElelementById('primary-navigation');


navOpen.addEventListener('click', ()=>{

    const visibility = primaryNavigation.getAttribute('data-visible');

    if(visibility === 'false'){
        primaryNavigation.setAttribute('data-visible', true);
        navClose.setAttribute('data-visible',true);
    }else{
        primaryNavigation.setAttribute('data-visible',false);   
        navClose.setAttribute('data-visible',false);
    }
})

navClose.addEventListener('click', ()=>{
    const visibility = primaryNavigation.getAttribute('data-visible');

    if(visibility === 'true'){
        primaryNavigation.setAttribute('data-visible',false);   
        navClose.setAttribute('data-visible',false);
    }

})

// =========Cart Menu===================

const shoppingBag= document.getElementById('cart-box');
const CartItem = document.getElementById('cart-box');
const crossBtn = document.getElementById('cross-btn');

shoppingBag.addEventListener('click', ()=>{
    const showCart = CartItem.getAttribute('data-visible');

    if(showCart === 'false'){
        CartItem.setAttribute('data-visible', true)
        }else{
            CartItem.setAttribute('data-visible', false)
    }   
})

crossBtn.addEventListener('clicl', ()=>{
    const showCart = CartItem.getAttribute('data-visible');

    if(showcart === 'true'){
        CartItem.setAttribute('data-visible', false)
    }
})