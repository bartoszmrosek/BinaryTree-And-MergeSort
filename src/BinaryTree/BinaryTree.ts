interface TreeNode<T> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

export enum TraverseType {
  inorder_DFS = 'inorder_DFS',
  preorder_DFS = 'preorder_DFS',
  postorder_DFS = 'postorder_DFS',
  breadth_first = 'breadth_first',
}

class BinaryTree<ValueType> {
  private tree: TreeNode<ValueType>;
  constructor(tree: TreeNode<ValueType>) {
    this.tree = tree;
  }

  setTree(tree: TreeNode<ValueType>): this {
    this.tree = tree;
    return this;
  }

  getTree(): TreeNode<ValueType> {
    return this.tree;
  }

  traverse(traverseType: TraverseType): ValueType[] {
    function inorderTraverse(
      tree: TreeNode<ValueType>,
      valueArrayRef: ValueType[],
    ) {
      if (tree.left) {
        inorderTraverse(tree.left, valueArrayRef);
      }
      valueArrayRef.push(tree.value);
      if (tree.right) {
        inorderTraverse(tree.right, valueArrayRef);
      }
    }

    function preorderTraverse(
      tree: TreeNode<ValueType>,
      valueArrayRef: ValueType[],
    ) {
      valueArrayRef.push(tree.value);
      if (tree.left) {
        preorderTraverse(tree.left, valueArrayRef);
      }
      if (tree.right) {
        preorderTraverse(tree.right, valueArrayRef);
      }
    }

    function postorderTraverse(
      tree: TreeNode<ValueType>,
      valueArrayRef: ValueType[],
    ) {
      if (tree.left) {
        postorderTraverse(tree.left, valueArrayRef);
      }
      if (tree.right) {
        postorderTraverse(tree.right, valueArrayRef);
      }
      valueArrayRef.push(tree.value);
    }

    function calculateTreeHeight(tree: TreeNode<ValueType> | undefined) {
      if (tree === undefined) return 0;
      const rightSubTree: number = calculateTreeHeight(tree.right);
      const leftSubTree: number = calculateTreeHeight(tree.left);

      if (leftSubTree > rightSubTree) {
        return leftSubTree + 1;
      } else {
        return rightSubTree + 1;
      }
    }

    const valueArr: ValueType[] = [];
    switch (traverseType) {
      case TraverseType.inorder_DFS:
        inorderTraverse(this.tree, valueArr);
        return valueArr;
      case TraverseType.preorder_DFS:
        preorderTraverse(this.tree, valueArr);
        return valueArr;
      case TraverseType.postorder_DFS:
        postorderTraverse(this.tree, valueArr);
        return valueArr;
      case TraverseType.breadth_first:
        // TBD
        return [];
    }
  }
}

export default BinaryTree;
