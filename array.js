// // // // //Array Methods

// // // // //let str="i am string"

// // // // //console.log(str.split(" "));//split

// // // // //let str2="i am from chennai"
// // // // //console.log(str2.replace("a","n"));//replace

// // // // //console.log(str2.replaceAll("a","n"));//replaceall

// // // // // let arr=['A','B','C','D']

// // // // // let a=arr.toString()
// // // // // let b=a.toLowerCase()
// // // // // let c=b.split(',')
// // // // // console.log(c);


// // // // let arr1=['a','b','c','d']  //literal way to create a array
// // // // let arr2=new Array(1,2,3,4) // another way to create a array
// // // // // console.log(arr1,arr3);

// // // // let a1=arr.toString()
// // // // let b1=a1.toUpperCase()
// // // // let c1=b1.split(',')
// // // // console.log(c1);


// // // // //static method

// // // // let arr3=Array.from("string")
// // // // console.log(arr3);  //['s', 't', 'r', 'i', 'n', 'g']

// // // // // non static method

// // // // // methods will modify original array

// // // let ipl=["csk","mi","rcb","rr","gt","srh","lsg","pk","dc","kkr"]

// // // // ipl.pop() //remove the last element in the array
// // // // console.log(ipl);

// // // // ipl.push("kochi")  //add the last element in the array
// // // // console.log(ipl);

// // // // ipl.shift() //remove the first element in the array
// // // // console.log(ipl);

// // // // ipl.unshift("csk")  //add the first element in the array
// // // // console.log(ipl);


// // // // ipl.splice(4,1)  //remove the middle of the element in array
// // // // console.log(ipl);

// // // // ipl.splice(4,1,"gl")  //add the middle of the element in array
// // // // console.log(ipl);


// // // //reverse

// // // ipl.reverse()
// // // console.log(ipl);
// // // ipl.sort() 
// // // console.log(ipl);

// // // let s="i am string"

// // // let i=(s.split(" ").reverse().join(""));
// // // console.log(i);







// //  let ipl=["mi","csk","kkr","rr","gt","pk","lsg","srh","dc","rcb"]


// // ipl.forEach(function (ele,i,arr){
// //     console.log(ele,i,arr);
    
// // })

// // console.log("ARROW FUNCTION.........");

// // ipl.forEach((ele,i,arr)=>{
// //     console.log(ele,i,arr);
    
// // })
// // console.log("MAP......................");

// // ipl.map((ele,i,arr)=>{
// //     console.log(ele,i,arr);
    
// // })
// // console.log("FITER................");

// // ipl.filter((ele,i,arr)=>{
// //     console.log(ele,i,arr);
    
// // })

// // console.log("findindex..........");

// // ipl.findIndex((ele,i,arr)=>{
// //     console.log(ele,i,arr);
    
// // })

//  let ipl=["mi","csk","kkr","rr","gt","pk","lsg","srh","dc","rcb"]


// //  let resforeach=ipl.forEach((el)=>{
// //     console.log(el);
// //     return 

// //  })

// //  console.log(resforeach);
 
// //   let res=ipl.map((e)=>{
// //     return e.toUpperCase();
// //  })

// //  console.log(res);
 
//  let resa=ipl.filter((e)=>{
//     if(e.includes("k"))
//     return e
//  })

//  console.log(resa);


 

//   let res=ipl.find((e)=>{
//     if(e.includes("k"))
//     return e
//  })

//  console.log(res);

// let num=[1,2,3,4]
//  let resultsome=num.some((e)=>{
//    if(e%2==0){
//       return e
//    }
//  })

 
//  let resultevery=num.every((e)=>{
//    if(e%2==0){
//       return e
//    }
//  })

//  console.log(resultsome);
//  console.log(resultevery);



//  let num2=[5,10,15,20,25]


//  let resultreduce=num2.reduce((a,e,i)=>{
//    console.log(a,e);

//    return a+e
   
//  })

//  console.log(resultreduce);

 
//  let resultreducer=num2.reduceRight((a,e,i)=>{
//    console.log(a,e);

//    return a+e
   
//  })

//  console.log(resultreducer);
 

 let arr=["birayani","idli","dosai","birayani"]


// console.log(arr.toString());
// console.log(arr.join(""));


// console.log(arr.indexOf("birayani"));
// console.log(arr.lastIndexOf("birayani"));
// console.log(arr.includes("idli"));
// console.log(arr.slice(0,3));


 
 
 
let products=[{
  id:1,
  name:"tea",
  price:165,
  rating:4.5
},{
  id:2,
  name:"sharawama",
  price:120,
  rating:4.5
},{
  id:3,
  name:"DOSA",
  price:250,
  rating:4.5
},{
  id:4,
  name:"DOSA",
  price:110,
  rating:4.5}]

console.log(products);


// products.forEach((e,i,arr)=>{
//   console.log(e.name);

  
  
// })

let pricefliter=products.filter((e,i,arr)=>{

    if(e.price>100 && e.price<200){
      return e
    }

})

console.log(pricefliter);

let search="dosa"

let b=products.filter((e)=>{
  if(e.name.includes(search)){
    return e
  }
})
console.log(b);

let c=products.filter((e)=>{
  if(e.name.toLowerCase().includes(search.toLowerCase())){
    return e
  }
})
console.log(c);
