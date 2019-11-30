// 1
let [a, b, c, d, e] = [-4, -1, 0, 3, 10]        
let arr = [a*a, b*b, c*c, d*d, e*e]
// 进行解构赋值
arr.sort((a,b)=>{
    return a-b
})
// 进行大小排序
console.log(arr)


// 2
class Father{
    constructor(age,height){
        this.age = age;
        this.height = height;
        
    }
    
}
const father = new Father(39,183)
// 创建父元素
class child extends Father{
    constructor(age,height){
        super(age,height);
    }
    
}
let child1 = new child(17,180)
// 从子元素中继承父元素的属性
window.onload = () =>{
    return father.age
}
window.onload = () =>{
    return father.height
}
// 返回父元素的“年龄”“身高”属性
window.onload = () =>{
    return child1.age
}
window.onload = () =>{
    return child1.height
}
// 返回子元素的“年龄”“身高”属性
console.log(child1)


// 3
let set = new Set([2, 3, 7, 5, 2, 6, 9, 7, 0]);
// 将Array转换为set形式
let set0 = Array.from(set)
let i = Math.max.apply(null,set0);
// 查找最大值
let set1 = new Set(set0);
set1.delete(i)
// 删除最大值
console.log(set1);
let promise = new Promise(function(){
    if ('set1.delete(i)'){
        console.log("9已被成功删除！")
    }else{
        console.log("删除数据时出现错误！")
    }
})
// 将删除成功与否体现在控制台上
 
const ages = new Map([
    ['张三',18],
    ['李四',47],
    ['王五',20],
    ['谢六',19]
])     
ages.forEach(function(){
    const sum = ages.get('张三') + ages.get('王五') + ages.get('谢六');
    console.log(sum)
}
);


// 4
let myPow = (x,n) =>{
    const poww = Math.pow(x,n);
    return poww
};
let result1 = myPow(2,10);
console.log(result1);
console.log(myPow(2,-2))