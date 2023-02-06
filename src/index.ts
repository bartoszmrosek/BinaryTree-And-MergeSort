import BinaryTree from './BinaryTree/BinaryTree.js';
import BinarySearchTree from './BinaryTree/BinarySearchTree.js';

const root = new BinaryTree<string>({ value: 'a' });
root.setTree({
  value: 'a',
  left: {
    value: 'ab',
    left: { value: 'aba' },
    right: { value: 'abb' },
  },
  right: {
    value: 'ac',
    right: {
      value: 'aca',
      right: { value: 'acaa' },
    },
  },
});

const SearchTree = new BinarySearchTree({
  value: 0,
  left: { value: 1 },
});

console.log(SearchTree.has(0));
