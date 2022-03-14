var a = [7,5,4,3,2];
for(var i =0; i< a.length;i++){
    if(i%2==0){
        var s =0;
        s += a[i];
    }
    else{
        var S=0;
     S += a[i];
    }
}
var arr = [s,S];
console.log(arr);