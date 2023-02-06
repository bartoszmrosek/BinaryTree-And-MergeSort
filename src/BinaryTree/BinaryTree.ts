export interface TreeNode<T> {
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
  protected tree: TreeNode<ValueType>;
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

  private inorderTraverse(
    tree: TreeNode<ValueType>,
    valueArrayRef: ValueType[],
  ) {
    if (tree.left) {
      this.inorderTraverse(tree.left, valueArrayRef);
    }
    valueArrayRef.push(tree.value);
    if (tree.right) {
      this.inorderTraverse(tree.right, valueArrayRef);
    }
  }

  private preorderTraverse(
    tree: TreeNode<ValueType>,
    valueArrayRef: ValueType[],
  ) {
    valueArrayRef.push(tree.value);
    if (tree.left) {
      this.preorderTraverse(tree.left, valueArrayRef);
    }
    if (tree.right) {
      this.preorderTraverse(tree.right, valueArrayRef);
    }
  }

  private postorderTraverse(
    tree: TreeNode<ValueType>,
    valueArrayRef: ValueType[],
  ) {
    if (tree.left) {
      this.postorderTraverse(tree.left, valueArrayRef);
    }
    if (tree.right) {
      this.postorderTraverse(tree.right, valueArrayRef);
    }
    valueArrayRef.push(tree.value);
  }

  private calculateTreeHeight(tree: TreeNode<ValueType> | undefined) {
    if (tree === undefined) return 0;
    const rightSubTree: number = this.calculateTreeHeight(tree.right);
    const leftSubTree: number = this.calculateTreeHeight(tree.left);

    if (leftSubTree > rightSubTree) {
      return leftSubTree + 1;
    } else {
      return rightSubTree + 1;
    }
  }

  private addGivenLevel(
    tree: TreeNode<ValueType>,
    level: number,
    arrayReference: ValueType[],
  ): void {
    if (level === 1) arrayReference.push(tree.value);

    if (level > 1) {
      if (tree.left) {
        this.addGivenLevel(tree.left, level - 1, arrayReference);
      }

      if (tree.right) {
        this.addGivenLevel(tree.right, level - 1, arrayReference);
      }
    }
  }

  private searchForColumnValues(
    tree: TreeNode<ValueType>,
    currentColumn: number,
    searchedColumn: number,
    valueArrayRef: ValueType[],
  ) {
    if (currentColumn === searchedColumn) valueArrayRef.push(tree.value);
    if (tree.left)
      this.searchForColumnValues(
        tree.left,
        currentColumn - 1,
        searchedColumn,
        valueArrayRef,
      );
    if (tree.right)
      this.searchForColumnValues(
        tree.right,
        currentColumn + 1,
        searchedColumn,
        valueArrayRef,
      );
  }

  public getColumn(columnOrder: number): ValueType[] {
    const valuesArray: ValueType[] = [];
    this.searchForColumnValues(this.tree, 0, columnOrder, valuesArray);
    return valuesArray;
  }

  public traverse(traverseType: TraverseType): ValueType[] {
    const valueArr: ValueType[] = [];
    switch (traverseType) {
      case TraverseType.inorder_DFS:
        this.inorderTraverse(this.tree, valueArr);
        return valueArr;
      case TraverseType.preorder_DFS:
        this.preorderTraverse(this.tree, valueArr);
        return valueArr;
      case TraverseType.postorder_DFS:
        this.postorderTraverse(this.tree, valueArr);
        return valueArr;
      case TraverseType.breadth_first:
        for (let i = 1; i <= this.calculateTreeHeight(this.tree); i++) {
          this.addGivenLevel(this.tree, i, valueArr);
        }
        return valueArr;
    }
  }
}

export default BinaryTree;
