let gradientBtn = document.querySelector('.gradient-button');
let gradientBtnSub = document.querySelector('.gradient-sub-button');


gradientBtn.addEventListener('mouseover', function() {
    gradientBtn.classList.add('gradient-button__mouseover');
    gradientBtnSub.classList.add('gradient-sub-button__mouseover');
});


gradientBtn.addEventListener('mouseout', function() {
    gradientBtn.classList.remove('gradient-button__mouseover');
    gradientBtnSub.classList.remove('gradient-sub-button__mouseover');
});

function topFunction() {
    document.body.scrollTop = 2790; // For Safari
    document.documentElement.scrollTop = 2790;
}