// 1 Biến:
// cú pháp: key [Tên biến] = [giá trị]
// key: var let const
// var, let: có thể gán lại giá trị của biến
// const: không thể gán lại giá trị cho biến 
// let a = "20"
// let b = a + "10"
// console.log(b)
// console.log("20"+ 10);

// // <=> var a
// // console.log(a)
// // b = a+c
// // 2. Kiểu Dữ liệu:
// // string, number, boolean, undefined, NaN, array, object
// // 3. Các phép toán: +-*/ % ++ -- **,
// // ><, >=, <=, !=, ==,===, &&, ||
// console.log(b==5 || b==10);
// BT1: cho 3 số abc là 3 cạnh của tam giác, 
//tính chu vi tam giác đó
// BT2: sử dụng prompt để cho người dùng nhập vào 3 số abc
//BT3: cho người dùng nhập vào 2 số chiều cao và cân nặng
// tính chỉ số BMI theo công thức: BMI = w/(h^2)

// let w = parseInt(prompt("Nhập vào số cân nặng"))
// let h = parseFloat(prompt("Nhập vào số chiều cao (đơn vị là mét)"))
// let c = parseInt(prompt("Nhập vào số c"))
// let chuVi = a+b+c
// console.log(`Chu vi của tam giác là: ${chuVi}`   );
// let BMI = w / (h**2)
// console.log(`Chỉ số BMI của bạn là ${BMI}`);
// // 4. Câu lệnh điều kiện:
// if(BMI <18){
//     console.log("Bạn hơi gầy");
// }
// else if(BMI>=18 && BMI<=25){
//     console.log("Bạn có cơ thể cân đối");
// }
// else{
//     console.log("Bạn hơi thừa cân, tập thể dục đi nhé");
// }


// let arr = [1,2,"hello",true, [5,6,7,8],{name:"Quân",age:24}]
// console.log(arr[1]);
let fruit = {
    name: "banana",
    produce:"Viet Nam"
}
console.log(fruit.name);

let array = [12,3235,3453,12,54,33,53234,34,645]
let array2 = [126,3235456,3453345,1256475,5423,33,53234,34,645]
function oddAndEven(arr) {
    let even = []
    let odd = []
    for (let index = 0; index < arr.length; index++) {
    if (arr[index]%2 == 0){
        even.push(arr[index])
    }else{
        odd.push(arr[index])
    }
}
console.log(even, odd);
}

function sum(a,b) {
    console.log(a+b);
}
sum(2,5)
oddAndEven(array)