import React, { useState } from 'react';

function NestedTreeNode({ node, searchTerm, level }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const shouldShowNode = searchTerm
    ? node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (node.children && node.children.some(childNode => shouldShowNode(childNode, searchTerm)))
    : true;

  const indent = level * 20;

  return shouldShowNode ? (
    <div style={{ marginLeft: `${indent}px` }}>
      <div onClick={toggleExpand}>
        {node.items ? expanded ? '-' : '+' : null} {node.code} {node.name}
      </div>
      {expanded &&
        node.items &&
        node.items.map(childNode => (
          <NestedTreeNode key={childNode.id} node={childNode} level={level + 1} />
        ))}
    </div>
  ): null;
}

export default NestedTreeNode;