var btns=document.querySelectorAll('.btn');
var container=document.querySelector(".container");


for(let btn of btns){
  btn.addEventListener("click",function(){
    btn.parentNode.remove();
  });
}

var div=document.createElement('div');
var inp=document.getElementById('input');
var add=document.querySelector("#Adding");
add.addEventListener("click",function(){
  inp=document.getElementById('input');
  if(inp.value!==""){
    document.getElementById("Adding").disabled = false;
  
    var div=document.createElement('div');
    div.className='item';
    var newItem=document.getElementById('input').value;

    var text= ` <p > ${newItem}</p> <button class='btn'> Delete</button> </div>`;
    div.innerHTML+=text;
    container.appendChild(div);
    document.getElementById('input').value="";
    add.disabled=true;
    btns=document.querySelectorAll('.btn');
    container=document.querySelector(".container");
    for(let btn of btns){
      btn.addEventListener("click",function(){
        btn.parentNode.remove();
      });

    }
  }
})
inp.addEventListener("keypress",function(event){
  if (event.key === "Enter") {
    console.log(event);
    event.preventDefault();
    document.getElementById('Adding').click();
  }
})

btns=document.querySelectorAll('.btn');
container=document.querySelector(".container");
var reset= document.getElementById('reset');
reset.addEventListener("click",function(){
  container.innerHTML="";
})
function enable(inp) {
  var add = document.getElementById("Adding");
  if (inp.value.trim() != "") {
      add.disabled = false;
  } else {
      add.disabled = true;
  }
};