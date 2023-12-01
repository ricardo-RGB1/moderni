/**
 * Options for scroll reveal animation.
 * @typedef {Object} ScrollRevealOption
 * @property {string} distance - The distance the element will move during the animation.
 * @property {string} origin - The starting position of the element.
 * @property {number} duration - The duration of the animation in milliseconds.
 */
 const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
 }; // scroll reveal option


ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500, 
});
ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
    ...scrollRevealOption,
    delay: 1500,
});

