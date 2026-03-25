class Stack
{
    constructor(capacity)
    {
        this.capacity=capacity;
        this.top=-1;
        this.array=new Array(capacity)
    }    
    push(value)
    {
        if(this.top>=this.capacity-1)
        {
            console.log('stack overflow')
            return false;
        }
        this.array[++this.top]=value;
        return true;
    }
    pop()
    {
        if(this.top<0)
        {
            console.log('stack underflow')
            return 0
        }
        return this.array[this.top--]
    }
    peek()
    {
        if(this.top<0)
        {
            console.log('stack empty')
            return 0
        }
        return this.array[this.top]
    }
    isEmpty()
    {
        return this.top<0
    }
    
    print()
    {
        if(this.isEmpty())
        {
            console.log('stack is empty')
            return
        }
        console.log('stack elements (top to bottom)')
        for(let i=this.top;i>=0;i--)
        {
            console.log(this.array[i])
        }
    }
}


let s=new Stack(5);
s.push(10)
s.push(15)
s.push(20)
s.push(25)
s.push(30)
s.print()

console.log('--------------')
console.log(s.peek())
