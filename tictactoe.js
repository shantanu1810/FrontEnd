let count=1;
let a=[-1,-1,-1,-1,-1,-1,-1,-1,-1],flag=0;
function change(s,d){
const b=document.getElementById(s);
const ply=document.getElementById('player');
var s=b.innerHTML;
if(count==10 || s!='' || flag==1){
    return;
}
else if(count==9){
    b.innerHTML='X';
    a[d]=1;
    if(check()){
        ply.innerHTML="1st Player Win. Congrats";
    }
    else{
        ply.innerHTML="COMPLETED";
    }
    flag=1;
}else if(count%2==1){
    b.innerHTML='X';
    a[d]=1;
    if(check()){
        ply.innerHTML="1st Player Win. Congrats";
        flag=1;
    }
    else{
        ply.innerHTML='2nd Players Turn.';
    }
}else{
    a[d]=0;
    b.innerHTML='O';
    if(check()){
        ply.innerHTML="2nd Player Win. Congrats";
        flag=1;
    }
    else{
        ply.innerHTML='1st Players Turn.';
    }
}
count++;
}
function check(){
    let i,g=1,j;
    for(i=0;i<9;i=i+3){
        g=1;
        for(j=0;j<2;j++){
            if(a[i+j]!=a[i+j+1]||a[i+j]==-1){
                g=0;
            }
        }
        if(g==1){
            return true;
        }
    }
    for(i=0;i<3;i++){
        g=1;
        for(j=0;j<6;j=j+3){
            if(a[i+j]!=a[i+j+3]||a[i+j]==-1){
                g=0;
            }
        }
        if(g==1){
            return true; 
        }
    }
    if((a[0]==a[4] && a[4]==a[8])&&a[0]!=-1){
        return true;
    }
    if((a[2]==a[4] && a[4]==a[6])&&a[2]!=-1){
        return true;
    }
    return false;
}
function reset(s1,s2,s3,s4,s5,s6,s7,s8,s9,s){
    b=[s1,s2,s3,s4,s5,s6,s7,s8,s9];
    for(let i=0;i<9;i++){
        let c=document.getElementById(b[i]);
        c.innerHTML='';
    }
    a=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    count=1;flag=0;
    let c=document.getElementById(s)
    c.innerHTML="1st Players Turn.";
}