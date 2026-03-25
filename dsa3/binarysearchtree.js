class TreeNode{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor()
    {
        this.root=null;
    }
    insert(value)
    {
        let newNode=new TreeNode(value)
        if(!this.root)
        {
           this.root=newNode;
           return
        }
        let current=this.root;
        while(true)
        {
            if(value<current.data)
            {
                if(!current.left)
                {
                    current.left=newNode;
                    return
                }
                current=current.left
            }
            else if(value>current.data)
            {
                if(!current.right)
                {
                    current.right=newNode;
                    return
                }
                current=current.right
            }
            else
            {
                return 
            }
        }
    }
    inorder(node=this.root)
    {
        if(!node) return
        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }
    postorder(node=this.root)
    {
       if(!node) return
       this.postorder(node.left)
       this.postorder(node.right)
       console.log(node.data)
    }
    preorder(node=this.root)
    {
        if(!node) return
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right)
    }
    search(value,node=this.root)
    {
        if(!node) return false;
        if(node.data==value) return true;
        if(value<node.data)
        {
           return this.search(value,node.left)
        }
        else
        {
            return this.search(value,node.right)
        }
    }
    bfs(node=this.root)
    {
        if(!node) return;
        let queue=[node];
        while(queue.length>0)
        {
            let current=queue.shift();
            console.log(current.data)
            if(current.left)queue.push(current.left)
            if(current.right)queue.push(current.right)
        }
    }
    findMin(node=this.root)
    {
        if(!node) return null;
        while(node.left)
        {
            node=node.left
        }
        return node.data
    }
    findMax(node=this.root)
    {
        if(!node) return;
        while(node.right)
        {
            node=node.right
        }
        return node.data
    }
    height(node=this.root)
    {
        if(!node) return 0;
        return 1+Math.max(this.height(node.left),this.height(node.right))
    }
    countNodes(node=this.root)
    {
        if(!node) return 0;
        return 1+this.countNodes(node.left)+this.countNodes(node.right)
    }
    countLeaves(node=this.root)
    {
        if(!node) return 0;
        if(!node.left&&!node.right) return 1;
        return this.countLeaves(node.left)+this.countLeaves(node.right)
    }
    isBalanced(node=this.root)
    {
        if(!node) return true;
        let lefthight=this.height(node.left)
        let righthight=this.height(node.right)
        if(Math.abs(lefthight-righthight)>1) return false;
        return this.isBalanced(node.left)&&this.isBalanced(node.right);
    }
    isPerfect(node = this.root) {
        if (!node) return true;

        let h = this.height();
        let n = this.countNodes();
       
        return n === Math.pow(2, h) - 1;
    }
    delete(value,node=this.root)
    {
        if(!node) return;
        if(value<node.data)
        {
            node.left=this.delete(value,node.left)
        }
        else if(value>node.data)
        {
           node.right=this.delete(value,node.right) 
        }
        else
        {
            if(!node.left&&!node.right)
            {
                return null
            }
            if(!node.right)
            {
                return node.left
            }
            if(!node.left)
            {
                return node.right
            }
            let minValue=this.findMin(node.right)
            node.data=minValue;
            node.right=this.delete(minValue,node.right)
        }
        return node
    }
}


const t=new Tree()
t.insert(10)
t.insert(20)
t.insert(30)
t.insert(40)
t.insert(50)
t.insert(60)
t.insert(70)
t.inorder()
console.log('--------------------------')
t.preorder()
console.log('--------------------------')
t.postorder()

console.log(t.search(11))
console.log('--------------------------')
t.bfs()
console.log('find min :',t.findMin())
console.log('find max:',t.findMax())
console.log('height of tree:',t.height())
console.log('number of leaves:',t.countLeaves())
console.log('checking balance:',t.isBalanced())
t.delete(20)