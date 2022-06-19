class Typing {
    constructor(el) {
        this.title = document.querySelector(el.title);
        this.interval = el.interval || 200
        this.delay = el.delay == undefined ? 1000 : el.delay

        this.text = this.title.innerHTML.trim()
        this.title.innerHTML = ""
        setTimeout(() => {
            this.write()
        }, this.delay);
    }
    write(i = 0) {
        this.title.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
    }
}
new Typing({
    title: '.header__title',
    interval: 300,
    delay: 100
})
new Typing({
    title: '.header__text',
    interval: 100,
    delay: 1000
})
new Typing({
    title: '.header__text1',
    interval: 300,
    delay: 10000
})



const tabsItem = document.querySelectorAll('.footer__logout'),
tabsContentItem = document.querySelectorAll('.footer__login'),
 tabsItem2 = document.querySelectorAll('.footer__logout2'),
tabsContentItem2 = document.querySelectorAll('.footer__login2'),
button =document.querySelectorAll('.footer__login__link'),
button2 =document.querySelectorAll('.footer__login__link2')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        for (let j = 0; j < button.length; j++) {
            tabsItem[j].classList.add('active')
            tabsContentItem[j].classList.remove('active')
            tabsItem2[j].classList.remove('active')
            tabsContentItem2[j].classList.add('active')
            
        }   
        tabsItem[i].classList.remove('active')
    tabsContentItem[i].classList.add('active')
        tabsItem2[i].classList.add('active')
    tabsContentItem2[i].classList.remove('active')
    }
    )
}
for (let k = 0; k < button2.length; k++) {
    button2[k].addEventListener('click', function() {
        for (let l = 0; l < button2.length; l++) {
            tabsItem[l].classList.remove('active')
            tabsContentItem[l].classList.add('active')
            tabsItem2[l].classList.add('active')
            tabsContentItem2[l].classList.remove('active')
            
        }   
        tabsItem[k].classList.add('active')
    tabsContentItem[k].classList.remove('active')
        tabsItem2[k].classList.remove('active')
    tabsContentItem2[k].classList.add('active')
    }
    )
}