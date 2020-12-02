//Object.defineProperty(目标对象，属性名，{设置项})
var obj = {}
Object.defineProperty(obj, 'a', {
    get() {
        return 'i am A'
    }
})
console.log(obj.a); //i am A

//构造器
function Test() {
    this.a = 1;
    this.b = 2;
    console.log(this.a + this.b)
}
var t = new Test();
/**
 * new 过程
 * 先创建this空对象 -> {}
 * 然后将this指定的属性添加进去
 * 最后return this对象
 */
/**
 * 如果手动return
 * 分2种情况
 * 1、值是普通类型数据
 * 会直接忽略，然后继续返回this
 * 2、值是新对象
 * 会返回手动设定的值，但是this对象在new的时候依然会创建并赋值，只是不return出来
 */