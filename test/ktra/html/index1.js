var arr = ["HUNGSS","PHUONG","CHU"];
var i = 0;  var m=0;
for(i=0; i< arr.length-1;i++){
  for(j=i+1; j<arr.length;j++){
         if(arr[i].length<arr[j].length){
             m = arr[i];
             arr[i]=arr[j];
             arr[j]=m;
             
         }
  }
  console.log(arr[0]);
}