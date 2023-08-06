function recursiveSort(list) {
  if (Array.isArray(list)) {
    return list.map(item => recursiveSort(item)).sort((a, b) => a.toString().localeCompare(b.toString()));
  } else {
    return list;
  }
}

const nestedList = [['apple', 'banana'], ['orange', 'grape'], ['kiwi', 'apple']];
const sortedNestedList = recursiveSort(nestedList);
console.log(sortedNestedList);