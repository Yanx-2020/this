//箭头函数（call，apply，bind三种this指向修改的方法对其无效）
var obj = {
    a: 1
}
var a = 2;
const test = () => {
    console.log(this.a)
}
test(); //2

obj.test = () => {
    console.log(this)
}
obj.test(); //window对象

obj.test1 = function() {
    var t = () => {
        console.log(this)
    }
    t()
}
obj.test1(); //obj对象

obj.test2 = function() {
    var t1 = () => {
        var t2 = () => {
            console.log(this)
        }
        t2()
    }
    t1()
}
obj.test2(); //obj对象

//将上面的修改一下下
obj.test3 = function() {
    var t3 = function() {
        var t4 = () => {
            console.log(this)
        }
        t4()
    }
    t3()
}
obj.test3(); //window对象

/**
 * 总结
 * 箭头函数的this指向 -> 外层作用域的this指向
 * <要记住的是，在函数内部再定义一个函数的时候，相当于在全局window下定义，在函数内部引用而已>
 */