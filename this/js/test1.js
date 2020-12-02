/**
 * this -> JavaScript 关键字
 * 当前执行期上下文对象的属性
 * this在不同环境中的指向是不同的
 * web  node  worker
 * 共同globalThis
 */

// console.log(window === this);
// var a = 1;
// console.log(a === window.a)


/**
 * web:window
 * node:global
 * worker:self
 */
// var a = 'global -> a';
// var obj = {
//     a: 'obj -> a',
//     test: function() {
//         console.log(this.a)
//             //obj->a
//         console.log('window  :' + window.a)
//             //window  :global -> a
//         console.log('globalThis  :' + globalThis.a)
//             //globalThis  :global -> a
//         console.log('self  :' + self.a)
//             //self  :global -> a
//         console.log('frames  :' + frames.a)
//             //frames  :global -> a
//     }
// }
// obj.test();

function test() {
    'use strict'
    return this;
}
console.log(test())
    //undefined
console.log(window.test())
    //window对象
    //可以看出普通的this，是谁调用，就指向谁