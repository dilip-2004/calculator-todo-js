let res='',num1,num2,i=0,j,k=0;
let arr=[];
function result(u)
{
  alert(num1);
  for(j=k;j<u;j++)
  {
    alert(num1);
    if(j%2===1)
    {
      alert(num1);
      if(arr[j]==='+')
      {
        num1+=number(arr[j+1]);
        k=j+2;
      }
      else if(arr[j]==='-')
      {
        num1-=number(arr[j+1]);
        k=j+2;
      }
      else if(arr[j]==='*')
      {
        num1*=arr[j+1];
        k=j+2;
      }
      else
      {
        num1/=number(arr[j+1]);
        k=j+2;
      }
    }
    else if(number(arr[j])>=0)
    {
      alert(num1);
      num1+=number(arr[j]);
    }
    alert('dilip');
  }
  alert(num1);
  i=0;
}

function showlist()
{
  const userinput=document.getElementById('input').Value;
  document.querySelector('.todolist').innerHTML=`list: ${userinput}`;
}


// to do list
const listarrray=[];
let totaltodo='';
function addlist()
{
  let inputvalue=document.getElementById('val').value;
  listarrray.push(inputvalue);
  for(let i=0;i<listarrray.length;i++)
  {
    const name=listarrray[i];
    const tt=`<p>${name}</p>`;
    totaltodo +=tt;
  }
  document.querySelector('.displaytodo').innerHTML=totaltodo;
  totaltodo='';
  document.getElementById('val').value='';
}

function checkenter(event)
{
  if(event.key==='Enter')
  {
    addlist();
  }
}