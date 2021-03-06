class Scroll {
    constructor(obj){
        if (typeof obj.el == "string") {
            this.element = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
            this.element = obj.el;
        }
        this.element.style.position = "fixed";
        this.top = obj.top;
        this.unit = obj.unit;
        this.scroll();
        window.addEventListener("scroll", ()=>{this.scroll()});
        window.addEventListener("resize", ()=>{this.scroll()});
    }
    scroll() {
        this.menuTop = this.scrollNumber()
        console.log(window.pageYOffset);
        if (this.menuTop - window.pageYOffset > 0) {
            this.element.style.top = this.menuTop - window.pageYOffset + "px";            
        } else {
            this.element.style.top = 0;
        }
    }
    scrollNumber() {
        if(this.unit == "px") {
            return this.top >= 0 ? this.top : 0;
        } else if( this.unit == "%" || this.unit == undefined) {
            return window.innerHeight / 100 * this.top - this.element.clientHeight;
        }
    }
}

let y = document.querySelector('.header__nav');
const x = new Scroll({
    // el: ".header__nav"
    el: y,
    top: 100,
    unit: "%"
});

let block = document.querySelector('.block'),
open = document.querySelector('.open'),
close = document.querySelector('.close')

open.addEventListener('click', function(a){
    block.style.transform = 'translateX(0)'
}) 

close.addEventListener('click', function(){
    block.style.transform = 'translateX(-100%)'
})
 
