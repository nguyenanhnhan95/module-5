let promise1=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(5)
    },5000)
})
let promise2=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(9)
    },10000)
})
Promise.all([promise1,promise2])
.then((data)=>{
    console.log(data)
})