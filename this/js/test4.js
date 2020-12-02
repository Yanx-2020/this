//apply call bind
/**
 * 三个的区别
 * apply(目标对象，参数1，参数2)
 * call(目标对象，[参数1，参数2])
 * apply和call是修改this指向之后直接调用
 * bind(目标对象，参数1，参数2)
 * bind是返回一个修改this指向之后的新function
 */

var obj = {
    a: 1
}
var a = 2;

function test(b, c) {
    console.log(this.a, b, c)
}
test(3, 4); //2,3,4
test.call(obj, 3, 4); //1,3,4
test.apply(obj, [3, 4]); //1,3,4
var t = test.bind(obj, 3, 4);
t(); //1,3,4
var obj2 = {
    a: 100
}
var t1 = test.bind(obj, 3, 4).bind(obj2, 3, 4)
t1(); //1,3,4

//bind的绑定修改只能生效一次