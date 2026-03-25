function reverseusingQueue(string)
{
    
 let queue=[]  ;
 for(i=string.length-1;i>=0;i--)
 {
    queue.push(string[i]) 
 }
let result='';
while(queue.length>0)
{
    result+=queue.shift()
}
  return result  
}

console.log(reverseusingQueue('naseef'))