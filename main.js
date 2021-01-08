const nameDiv = document.getElementById('nameContainer');

anime({
    targets: ".letter",
    opacity: [0, 1],
    translateY: ['-150px', '0px'],
    easing: 'easeOutCubic',
    duration: 1500,
    delay: anime.stagger(100)
})