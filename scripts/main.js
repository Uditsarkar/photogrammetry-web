var landingPage = document.getElementById('landing');
landingPage.addEventListener('click', function(){
    const element = document.getElementById('first-page');
    /* set menu in navbar correspond to the page in the view */
    firststepPage.classList.remove('active');
    firststepPage.setAttribute('aria-current', 'none');
    aboutusPage.classList.remove('active');
    aboutusPage.setAttribute('aria-current', 'none');
    landingPage.classList.add('active');
    landingPage.setAttribute('aria-current', 'page');
    /* scroll to desired page */
    element.scrollIntoView();
    console.log('in1');
});

var firststepPage = document.getElementById('firststep');
firststepPage.addEventListener('click', function(){
    const element = document.getElementById('second-page');
    /* set menu in navbar correspond to the page in the view */
    landingPage.classList.remove('active');
    landingPage.setAttribute('aria-current', 'none');
    aboutusPage.removeAttribute('active');
    aboutusPage.setAttribute('aria-current', 'none');
    firststepPage.classList.add('active');
    firststepPage.setAttribute('aria-current', 'page');
    /* scroll to desired page */
    element.scrollIntoView();
    console.log('in2');
});

var aboutusPage = document.getElementById('aboutus');
aboutusPage.addEventListener('click', function(){
    const element = document.getElementById('third-page');
    /* set menu in navbar correspond to the page in the view */
    landingPage.classList.remove('active');
    landingPage.setAttribute('aria-current', 'none');
    firststepPage.classList.remove('active');
    firststepPage.setAttribute('aria-current', 'none');
    aboutusPage.classList.add('active');
    aboutusPage.setAttribute('aria-current', 'page');
    /* scroll to desired page */
    element.scrollIntoView();
    console.log('in3');
});