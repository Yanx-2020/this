//事件函数绑定
// var oBtn = document.querySelector('#btn');

// oBtn.addEventListener('click', function() {
//     console.log(this);
//     //<button style="width: 80px;height: 50px;" id="btn">点击</button>
// }, false)

//再点击事件中，this指向被绑定的DOM元素

;
(function(doc) {
    var oBtn = doc.querySelector('#btn');

    function Plus(a, b) {
        this.a = a;
        this.b = b;
        this.init();
    }

    Plus.prototype.init = function() {
        this.bindEvent()
    }

    Plus.prototype.bindEvent = function() {
        oBtn.addEventListener('click', this.handleBtnClick.bind(this), false)
    }
    Plus.prototype.handleBtnClick = function() {
        console.log(this.a + this.b)
        console.log(this) //由于事件绑定this永远指向被绑定的DOM元素，所以我们在调用函数的时候需要改变一下this指向
    }
    window.Plus = Plus;
})(document)

new Plus(3, 4)