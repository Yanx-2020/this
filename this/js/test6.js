//this的基本原则，谁调用指向谁（箭头函数除外）
var obj = {
    a: 1,
    b: 2,
    test: function() {
        console.log(this)
    },
    test2: test2,
    c: {
        d: 4,
        test3: function() {
            console.log(this)

            function t() {
                console.log(this)
            }
            t(); //window对象
        }
    }
}

function test2() {
    console.log(this)
}
obj.test(); //obj对象
obj.test2(); //obj对象
obj.c.test3(); //obj->c对象

var obj2 = Object.create(null)
var obj3 = Object.create({
    e: 5,
})
console.log(obj2)
obj3.f = 6;
console.log(obj3);
/**
 * Object.create({})括号里面设置的是对象的__proto__属性
 * obj3.f 是直接向obj3本体上面添加属性
 */