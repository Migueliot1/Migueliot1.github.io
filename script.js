// Save theme and language values from local storage
let theme = localStorage.getItem('theme')
let language = localStorage.getItem('language')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

if(language == null){
    setLanguage('ru')
}else{
    setLanguage(language)
}


let themeDots = document.getElementsByClassName('theme-dot')

// Add events to each of the 'change theme' buttons
for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        setTheme(mode)
    })
}


// Get the color of a pressed button
// and change the theme accordingly to its value
function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    // Set the theme which was on the last visit
    localStorage.setItem('theme', mode)
}


function setLanguage(language){
    if(language == 'ru'){
        document.getElementById('ru-greeting').style.display = 'block'
        document.getElementById('lang-to-en').style.display = 'block'
        document.getElementById('ru-settings-node').style.display = 'block'
        document.getElementById('ru-what-do').style.display = 'block'
        document.getElementById('ru-me-synopsis').style.display = 'block'
        document.getElementById('ru-about-title').style.display = 'block'
        document.getElementById('ru-about-text').style.display = 'block'
        document.getElementById('ru-skills').style.display = 'block'
        document.getElementById('ru-skills-summary').style.display = 'block'
        document.getElementById('ru-social-links').style.display = 'block'
        document.getElementById('ru-projects-title').style.display = 'block'
        document.getElementById('ru-post-title1').style.display = 'block'
        document.getElementById('ru-post-intro1').style.display = 'block'
        document.getElementById('ru-post-title2').style.display = 'block'
        document.getElementById('ru-post-intro2').style.display = 'block'
        document.getElementById('ru-post-title3').style.display = 'block'
        document.getElementById('ru-post-intro3').style.display = 'block'

        document.getElementById('en-greeting').style.display = 'none'
        document.getElementById('lang-to-ru').style.display = 'none'
        document.getElementById('en-settings-node').style.display = 'none'
        document.getElementById('en-what-do').style.display = 'none'
        document.getElementById('en-me-synopsis').style.display = 'none'
        document.getElementById('en-about-title').style.display = 'none'
        document.getElementById('en-about-text').style.display = 'none'
        document.getElementById('en-skills').style.display = 'none'
        document.getElementById('en-skills-summary').style.display = 'none'
        document.getElementById('en-social-links').style.display = 'none'
        document.getElementById('en-projects-title').style.display = 'none'
        document.getElementById('en-post-title1').style.display = 'none'
        document.getElementById('en-post-intro1').style.display = 'none'
        document.getElementById('en-post-title2').style.display = 'none'
        document.getElementById('en-post-intro2').style.display = 'none'
        document.getElementById('en-post-title3').style.display = 'none'
        document.getElementById('en-post-intro3').style.display = 'none'
    }

    if(language == 'en'){
        document.getElementById('en-greeting').style.display = 'block'
        document.getElementById('lang-to-ru').style.display = 'block'
        document.getElementById('en-settings-node').style.display = 'block'
        document.getElementById('en-what-do').style.display = 'block'
        document.getElementById('en-me-synopsis').style.display = 'block'
        document.getElementById('en-about-title').style.display = 'block'
        document.getElementById('en-about-text').style.display = 'block'
        document.getElementById('en-skills').style.display = 'block'
        document.getElementById('en-skills-summary').style.display = 'block'
        document.getElementById('en-social-links').style.display = 'block'
        document.getElementById('en-projects-title').style.display = 'block'
        document.getElementById('en-post-title1').style.display = 'block'
        document.getElementById('en-post-intro1').style.display = 'block'
        document.getElementById('en-post-title2').style.display = 'block'
        document.getElementById('en-post-intro2').style.display = 'block'
        document.getElementById('en-post-title3').style.display = 'block'
        document.getElementById('en-post-intro3').style.display = 'block'

        document.getElementById('ru-greeting').style.display = 'none'
        document.getElementById('lang-to-en').style.display = 'none'
        document.getElementById('ru-settings-node').style.display = 'none'
        document.getElementById('ru-what-do').style.display = 'none'
        document.getElementById('ru-me-synopsis').style.display = 'none'
        document.getElementById('ru-about-title').style.display = 'none'
        document.getElementById('ru-about-text').style.display = 'none'
        document.getElementById('ru-skills').style.display = 'none'
        document.getElementById('ru-skills-summary').style.display = 'none'
        document.getElementById('ru-social-links').style.display = 'none'
        document.getElementById('ru-projects-title').style.display = 'none'
        document.getElementById('ru-post-title1').style.display = 'none'
        document.getElementById('ru-post-intro1').style.display = 'none'
        document.getElementById('ru-post-title2').style.display = 'none'
        document.getElementById('ru-post-intro2').style.display = 'none'
        document.getElementById('ru-post-title3').style.display = 'none'
        document.getElementById('ru-post-intro3').style.display = 'none'

    }

    // Set the language which was on the last visit
    localStorage.setItem('language', language)
}

document.getElementById('lang-to-en').onclick = function() {
    setLanguage('en')
}

document.getElementById('lang-to-ru').onclick = function() {
    setLanguage('ru')
}

if (document.getElementById('send_msg')) {
    document.getElementById('send_msg').onclick = function() {
        document.getElementById('send_msg_form').submit()
    }
}
