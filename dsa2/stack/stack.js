class stack{
    constructor()
    {
        this.items=[]
    }
    push(element)
    {
        this.items.push(element)    
    }
    pop()
    {
        if(this.items.length==0) return null
        return this.items.pop()
    }
    peek()
    {
        if(this.items.length==0) return null
        return this.items[this.items.length-1]
        
    }
    
    isEmpty()
    {
        return this.items.length==0
    }
    size()
    {
        return this.items.length
    }
    deleteMiddle(){
        let k=Math.floor(this.items.length/2)
        let temp=[];
        while(k>0){
            temp.push(this.items.pop())
            k--
        }
        this.items.pop();
        while(temp.length){
            this.items.push(temp.pop())
        }
    }
  print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack (top to bottom):", this.items.slice().reverse().join(" -> "));
    }
}

const newstack=new stack()
newstack.push(8)
newstack.push(9)
newstack.push(10)
newstack.push(11)
newstack.print()
console.log(newstack.peek())
console.log(newstack.isEmpty())
console.log(newstack.size())
