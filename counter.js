const para = document.getElementsByTagName('p')
const type=document.getElementById('one')
let count = 0;
function incr ()
{
    if(count<25)
    {
        count++
        if(count%2==0)
        {
        
        para[0].textContent = count
        para[1].textContent = "incremented"
        type.textContent="Even"
        }
        else{
            para[0].textContent = count
            para[1].textContent = "incremented"
            type.textContent="Odd"
        }
    }
    else{
        alert("can't increase greater than 25")
        
    }
   
}
function decr ()
{
    if (count > 0)
    {
        count--
        if(count%2==0)
      {
      para[0].textContent = count
      para[1].textContent = "decremented" 
      type.textContent="Even"
      } 
      else
      {
        para[0].textContent = count
      para[1].textContent = "decremented" 
      type.textContent="Odd"

      }
    }
    else
    {
        alert("don't decrease than zerooo")
    }
   
}
function reset ()
{
    count = 0;
    para[0].textContent = count
    para[1].textContent = ""
    type.textContent=" "
}