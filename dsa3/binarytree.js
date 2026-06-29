class TreeNode{
    constructor(data)
    {
        this.data=data;
        this.left=null;
        this.right=null
    }
}

class Tree{
    constructor()
    {
        this.root=null;
    }
    insert(value)
    {
        let newNode = new TreeNode(value);
        if(this.root==null)
        {
            this.root=newNode;
            return
        }
        let queue=[this.root];
        while(queue.length)
        {
            let node=queue.shift();
            if(!node.left)
            {
                node.left=newNode;
                return
            }
            else
            {
                queue.push(node.left)
            }
            if(!node.right)
            {
                node.right=newNode;
            
                return
            }
            else
            {
                queue.push(node.right)
            }
        }
    }
    inorder(node=this.root)
    {
        if(!node) return
        this.inorder(node.left);
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
        this. preorder(node.left)
        this. preorder(node.right)
    }
    levelorder()
    {
        if(!this.root) return
        let queue=[this.root];
        while(queue.length)
        {
            let node=queue.shift()
            console.log(node.data)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
  search(value,node=this.root)
  {
       if(!node) return false;
       if(node.data==value) return true
       return this.search(value,node.left)||this.search(value,node.right)
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
 isBalanced(node=this.root){
     if(!node)return true
     let leftheight=this.height(node.left)
     let righheight=this.height(node.right)
     if(Math.abs(leftheight-righheight)>1) return false;
     return this.isBalanced(node.left)&&this.isBalanced(node.right)
 }
  storeinorder(node,arr)
   {
       if(!node) return ;
       this.storeinorder(node.left,arr)
       arr.push(node.data)
       this.storeinorder(node.right,arr)
   }
   arrayToBst(node,arr,index)
   {
       if(!node) return;
       this.arrayToBst(node.left,arr,index)
       node.data=arr[index.i++];
       this.arrayToBst(node.right,arr,index)
   }
   convertBst()
   {
       let values=[];
       this.storeinorder(this.root,values)
       values.sort((a,b)=>a-b)
       this.arrayToBst(this.root,values,{i:0})
   }
   leafNodes(node=this.root,values=[])
   {
       if(!node) return 0;
       if(!node.left&&!node.right)
       {
           values.push(node.data)
       }
       this.leafNodes(node.left,values)
       this.leafNodes(node.right,values)
       return values
   }
   countleft(node=this.root,isLeft=false)
   {
       if(!node) return 0;
       let count=isLeft?1:0;
       count+=this.countleft(node.left,true)
       count+=this.countleft(node.right,false)
       return count
   }
     findMin(){
            if(!this.root) return null;
            let min=this.root.value;
            let queue=[this.root];
            while(queue.length){
                let node=queue.shift();
                if(node.value<min){
                    min=node.value
                }
                if(node.left){
                    queue.push(node.left)
                }
                if(node.right){
                    queue.push(node.right)
                }
            }
            return min
        }
}

let t=new Tree()
t.insert(10)
t.insert(20)
t.insert(30)
t.insert(40)
t.insert(50)
t.insert(60)
t.insert(70)
t.insert(80)

t.inorder()
console.log('----------------------')
t.postorder()
console.log('----------------------')
t.preorder()
console.log('----------------------')
t.levelorder()

console.log('serach result :',t.search('10'))
console.log('height of treee  :',t.height())
console.log('height of nodes :',t.countNodes())
console.log('count of leaves ;',t.countLeaves())
console.log('balnced cheking :',t.isBalanced())
t. convertBst()
t.inorder()
console.log('leaf nodes :',t.leafNodes())
console.log('count of nodes :',t.countleft())
