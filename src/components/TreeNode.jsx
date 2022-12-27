import React from 'react'
import Tree from './Tree';

const TreeNode = ({node}) => {
    const hasChild = node.children;
  return (
   <li className={hasChild && 'has-child'}>
        <div className="parent-child-container">
            <img src={require(`../assets/images/${node.url}`)} alt="" />
            <span>{node.name}</span>
        </div>
        {hasChild && <Tree data={node.children}/>}
   </li>
  )
}

export default TreeNode