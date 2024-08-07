const input = document.getElementById('input')
const tasks = document.getElementById('task');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    if(input.value===''){
        alert('PLEASE INSET A TASK')
    }else{
        let li = document.createElement('li');
        li.innerHTML=input.value;
        tasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML="X";
        li.appendChild(span);
    }
    input.value='';
    save();
})

tasks.addEventListener('click', function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle('checked');
        save();
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();
    }
});

function save(){
    localStorage.setItem('task', tasks.innerHTML);
}

function retriveSave(){
    tasks.innerHTML=localStorage.getItem('task');
}

retriveSave();