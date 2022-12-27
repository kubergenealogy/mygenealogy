import React from 'react'
import TreeNode from './TreeNode'

const Tree = ({data=[]}) => {
    console.log(data.children)
  return (
    <ul>
        {
            data.map((tree)=>{
                return <TreeNode node = {tree}/>
            })
        }
    </ul>
  )
}

export default Tree