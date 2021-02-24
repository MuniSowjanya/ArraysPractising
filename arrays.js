const items=[
    {
        name:'Laptop',price:25000,barand:'Dell'
    },
    {
        name:'Iphone',price:15000,barand:'Apple'
    },
    {
        name:'TV',price:10000,barand:'Panasonic'
    },
    {
        name:'Computer',price:19000,barand:'ThinkVision'
    }
]

//Filter method:Return an array of all the values with price greater than  or equal to 15000
// const FilterPrice=items.filter((item)=>{
//     return item.price>=15000
// })
// console.log(FilterPrice)

//Mapping method:creates a new array with the results of calling a function for every array of items with names
// const ItemsNames=items.map((item)=>{
//     let names=item.name
//     return names
// })
// console.log(ItemsNames.join(' ~ '))

//Find Method:returns the value of the item.name element in an array that pass a test (provided as a function).
// const FindTv=items.find((item)=>{
//     return item.name=='TV'
// })
// console.log(FindTv)
// //forEach() method calls a function once for each element in an array, in order.
// items.forEach((item)=>{
// // console.log(item.barand)
// // })
// //The some() method checks if any of the elements in an array pass a test (provided as a function).

// // The some() method executes the function once for each element present in the array:

// // Some Method:If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
// // Otherwise it returns false
// const expensiveItem=items.some((item)=>{
//     return item.price>=25000//true
// })
// console.log(expensiveItem);

//Every:The every() method executes the function once for each element present in the array:

// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// const hasAnyBrand=items.every((item)=>{
// return item.barand=='Dell'//false,if it is Some method it returns 'True'
// })
// console.log(hasAnyBrand);
//The reduce() method reduces the array to a single value.
// const TotalPriceForItems=items.reduce((total,item)=>{
//     return total+=item.price
// },0)
// console.log(TotalPriceForItems);
//The includes() method determines whether an array contains a specified element.
// const arr=[2,5,6,7,8,9]
// const InPrice=arr.includes(0)
// console.log(InPrice);

//Sorting an elements in an array
// const Array=[15,20,10,5,89,42,60]
// // const newArray=Array.sort((a,b)=>{
// //    if(a>b)return -1//for descending order return -1,for ascending order return 1
// //    else return 1//for descending order return 1,for ascending order return -1
// // })
// // console.log(newArray);
// //For ascending order
// const newlist=Array.sort((a,b)=>{
//     return a-b
// })
// console.log(newlist);