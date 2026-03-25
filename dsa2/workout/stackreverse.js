class Stack{
    constructor()
    {
        this.items=[];
    }
    
    isEmpty()
    {
        return this.items.length==0
    }
    push(value)
    {
        this.items.push(value)
    }
    pop()
    {
        if(this.isEmpty())
        {
            console.log('stack underflow')
        }
       return this.items.pop()
    }
    
    print()
    {
        if(this.isEmpty())
        {
            console.log('stack is empty')
            return
        }
        console.log(this.items.join('->'))
    }
}
function reverseStack(stack)
{
    let tempstack=new Stack()
    while(!stack.isEmpty())
    {
      tempstack.push(stack.pop())  
    }
    return tempstack
}

let s= new Stack()
s.push(10)
s.push(11)
s.push(12)
s.push(13)
s.print()
s=reverseStack(s)
s.print()

