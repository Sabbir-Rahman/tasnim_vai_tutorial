let a = b =c = 5;

if (a!=b){
    alert('Inside if')
}
else if (b!=c){
    alert('Inside else if')
}
else{
    alert('Inside else')
}

//for loop
let str = '';
for(let i=0;i<5;i++){

    str+=i;
    str+='\n'
}

alert(str)

let i =0;
let str2 = ''
while(i<10){
    str2+=i;
    str2+='\n';
    i++;
}
alert(str2);