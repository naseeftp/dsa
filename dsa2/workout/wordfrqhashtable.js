function countwords(string)
{
  let words=string.toLowerCase().split(' ')
  let hashTable={};
  for(let word of words)
  {
      if(hashTable[word])
      {
         hashTable[word]++ 
      }
      else
      {
          hashTable[word]=1;
      }
  }
return hashTable;    
    
}

let string='Apple banana apple orange Banana apple'
let result=countwords(string)
console.log(result)