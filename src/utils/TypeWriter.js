export class TypeWriter {
    constructor(txtElement, words, wait = 300) {
        this.txtElement = txtElement
        this.words = words
        this.txt = ""
        this.wordIndex = 0
        this.wait = parseInt(wait, 10)
        this.type()
        this.isDeleting = false
    }
    type() {
        // Текущий индекс слова
        const current = this.wordIndex % this.words.length
        //    Получить полный текст слова
        const fullTxt = this.words[current]
        // console.log(fullTxt)

        if (this.isDeleting) {
            // Удаление символа
            this.txt = fullTxt.substring(0, this.txt.length - 1)
        }
        else {
            // добавление символа
            this.txt = fullTxt.substring(0, this.txt.length + 1)
        }
        // вставить текст в элемент
        this.txtElement.setAttribute('placeholder', this.txt)
        // this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`
        // тип скорости
        let typeSpeed = 300
        if (this.isDeleting) {
            typeSpeed /= 2
        }
        // если слово закончилось
        if (!this.isDeleting && this.txt === fullTxt) {
            // сделать паузу в конце
            typeSpeed = this.wait
            this.isDeleting = true
        }
        else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false
            // переходим к след. слову 
            this.wordIndex++
            //пауза после начала 
            typeSpeed = 500
        }
        setTimeout(() => this.type(), typeSpeed)
    }
}

// document.addEventListener('DOMContentLoaded', init)

// function init() {
//     const txtElement = document.querySelector('#input')
//     const words = JSON.parse(txtElement.getAttribute('data-words'))
//     const wait = txtElement.getAttribute('data-wait')

//     new TypeWriter(txtElement, words, wait)
// }