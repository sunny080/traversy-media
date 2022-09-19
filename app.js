// test1
// const reversing = (string) => string.split("").reverse().join("");
// console.log(reversing('sunny'));

// test2
// const reversing = (string) => {
//   const plandrom = string.split("").reverse().join("");
//   const data = plandrom === string;
//   return data
// };
// console.log(reversing("madam"));

// test3;
// const numrev = (num) => (num = Number(String(num).split("").reverse().join("")));
// console.log(numrev(654321));

// test4
// const firstupper = (str) => {
//    const arr = str.toLowerCase().split(" ")
//     for(var i = 0;i < arr.length; i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     const arr2 = arr.join(" ")
//     return arr2
// }
// console.log(firstupper( 'i have now lOndon'))

// test5
// const maxCharc = (str) => {
//     const data = {}
//     str.split("").filter((word) => {
//         if(data[word] ){
//             data[word]++;
//         }else{
//             data[word] = 1;
//         }
//     })
//     return data
// }
// console.log(maxCharc("javascript"))

// // test 6
// function fizzbuzz  ()  {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("buzz");
//     } else if (i % 5 === 0) {
//       console.log("fizz");
//     }else{
//         console.log(i)
//     }
//   }
// };
// console.log(fizzbuzz());
