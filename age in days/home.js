function findage(){
    var age=prompt("enter your age plss")
    var ageindays=age*365;
    var h1=document.createElement('h1')
    var ans=document.createTextNode("age in days :"+ageindays)
    h1.appendChild(ans);
    h1.setAttribute('id','attri')
    document.getElementById('result').appendChild(h1)
}
function reset(){
    document.getElementById('attri').remove()
}