import BinaryTree, { TreeNode } from './BinaryTree';

export default class BinarySearchTree extends BinaryTree<number> {
  constructor(tree: TreeNode<number>) {
    super(tree);
  }

  private searchValue(value: number, tree: TreeNode<number>): boolean {
    if (value === tree.value) return true;

    if (tree.left && this.searchValue(value, tree.left)) return true;
    if (tree.right && this.searchValue(value, tree.right)) return true;

    return false;
  }

  public has(value: number): boolean {
    return this.searchValue(value, this.tree);
  }
}
