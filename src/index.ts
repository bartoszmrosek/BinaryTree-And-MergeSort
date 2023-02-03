import BinaryTree, { TraverseType } from './BinaryTree/BinaryTree.js';

const root = new BinaryTree<string>({ value: 'a' });
root.setTree({
  value: 'a',
  left: new BinaryTree({
    value: 'ab',
    left: new BinaryTree({ value: 'aba' }).getTree(),
    right: new BinaryTree({ value: 'abb' }).getTree(),
  }).getTree(),
  right: new BinaryTree({
    value: 'ac',
    right: new BinaryTree({
      value: 'aca',
      right: new BinaryTree({ value: 'acaa' }).getTree(),
    }).getTree(),
  }).getTree(),
});

console.log(root.getTree());
console.log(root.traverse(TraverseType.breadth_first));
