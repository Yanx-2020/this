//类(本质就是函数)
// class Test {
//     constructor() {
//         this.a = 1;
//     }
//     say() {
//         console.log(this)
//     }
//     static do() {
//         console.log('this is do function')
//     }
// }

// var test = new Test();
// test.say();
// //指向实例化的Test对象

// //constructor
// function Test1() {
//     this.a = 2;
// };
// //class中的方法
// Test1.prototype.say = function() {
//     console.log(this.a);
// };
// //static定义的静态方法
// Test1.do = function() {
//     console.log('this is do function')
// };

// var t = new Test1();
// t.say();

class Test {
    constructor() {
        this.test = function() {
            console.log('none-static : ' + this)
        }
    }
    test() {
        console.log('static : ' + this)
    }
}
const t = new Test()
t.test();
/**
 * 可以看出constructor是相当于在类本体上定义属性
 * test（）这种定义方法就是在类的原型上定义方法
 * 在调用的时候
 * 先从自身开始寻找，然后向原型链上寻找
 */