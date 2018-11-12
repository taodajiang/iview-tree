//初始化时处理数据的方法
export const getSysMenuTreeData = (node, list) => {
    node.children = [];
    node.title = node.menuName;
    node.expand = true;
    node.selected = node.isSelect == '1';
    list.forEach((value) => {
        if (value.parentId === node.id) {
            getSysMenuTreeData(value, list);
            node.children.push(value);
        }
        
    })
};
//获取当前节点及子节点的数据
export const setChildrenNode = (node, bool) => {
    node.children.forEach((value) => {
        setChildrenNode(value, bool);
        value.selected = bool;
    });
    node.selected = bool;
};
//获取当前节点的父节点及其节点链的数据
export const setParentNode = (root, node,bool) => {
    let parent = root.find((item)=>{
        return item.node.id == node.parentId
    });
    if(parent){
        if(bool){
            setParentNode(root,parent.node,bool); 
            parent.node.selected = bool;
        }else{
            if(!parent.node.children.some((item)=>{
                return item.selected
            }))
                parent.node.selected = bool;
            setParentNode(root,parent.node,bool);
        }  
    }else{
        if(!node.children.some((item)=>{
            return item.selected
        }))
        node.selected = false
        else
        node.selected = true
    }
};