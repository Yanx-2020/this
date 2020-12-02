//继承（extends，super）
class Father {
    constructor() {
        /**
         * 注意
         * 在没有使用new方法实例化的时候，不存在this对象
         * no this binding
         */
        this.age = 33
    }
    swim() {
        console.log('i am swimming!!!')
    }
}
class Son extends Father {
    constructor() {
        /**
         * super的实质就是new Father然后生成this对象
         * 在没有使用super之前是不存在this对象的
         */
        /**
         * 还有一种情况是this设置属性的语句在super前面
         * 这时候 new Son的时候会创建this对象
         * 然后super时又创建Father的this对象，会覆盖Son的this对象
         */
        super()
        this.hobby = 'traval'
    }
    study() {
        console.log(this)
        this.swim()
    }
}
const son = new Son()
son.study(); //i am swimming!!!