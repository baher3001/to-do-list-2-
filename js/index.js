

var H2 = document.getElementById('date');
var Task = document.getElementById('task');
var Reload = document.getElementById('reload');
var Click = document.getElementById('click');
var List = document.getElementById('list');
var Done = document.getElementById('done');
var Result = document.getElementById('res');
var Counter = 0;

Click.onclick = function()
{
    if(Task.value)
    {
        var li = document.createElement('li')
        li.setAttribute('id', Counter);
        List.appendChild(li);
        li.innerHTML=`<a onclick={list(${Counter})}   class="ww"  > done  </a>` +`<span id="a-${Counter}">${Task.value } </span>` + `<a  onclick={remove(${Counter})} class="qq"> delete</a> `
        Task.value = "";
        Counter+=1;
        Result.style.display="none";

    }
    else
    {
        Result.innerHTML = "Please Enter Your task here ";
        Result.style.color="red";
    }
}

var Date1 = new Date().getDay();
var Days = ['Monday','Tuesday','wednesday','Thursday','Friday','Saturday','Sunday'];
var Day = Days[Date1-1]

H2.innerHTML = Day;


function  remove(id)
{
    document.getElementById(id).remove();

}


function list(id)
{
   var item = document.createElement('li');
   item.innerHTML =`<a style="color:red; text-decoration:line-through;" > ${document.getElementById('a-'+id).innerText} </a>`
   Done.append(item)
   remove(id);
}


Reload.onclick = function()
{
    location.reload();
}
