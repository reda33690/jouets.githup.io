function cick(){
    var pw=document.getElementById('pw').value
    if(pw.length <8) {
        document.getElementById('sub').style.backgroundColor='blue'
        document.getElementById('sub').style.position='relative'
        document.getElementById('sub').style.top=Math.floor(Math.random()*300)+"px"
        
        document.getElementById('sub').style.right=Math.floor(Math.random()*600)+"px"
    }
    else{
        document.getElementById('sub').style.backgroundColor='#e346ff'
        document.getElementById('sub').style.position='relative'
        document.getElementById('sub').style.marginTop="0px"
        document.getElementById('sub').style.left="0px"
        
       
    }
}