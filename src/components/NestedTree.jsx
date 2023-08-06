import React, { useState } from 'react';
import NestedTreeNode from './NestedTreeNode';
import Search from './Search';


function NestedTree({ treeData }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='nestedTree'>
      <Search onSearch={handleSearch} />
      {treeData.map(node => (
        <NestedTreeNode key={node.id} node={node} searchTerm={searchTerm} level={0}/>
      ))}
    </div>
  );
}

export default NestedTree;