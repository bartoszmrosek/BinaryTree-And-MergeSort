import BinaryTree, { TraverseType } from './BinaryTree';

const root = new BinaryTree({ value: 'a' });
describe('BinaryTree', () => {
  test('is set properly', () => {
    expect(root.getTree()).toHaveProperty('value', 'a');
  });

  test('can be set with new tree', () => {
    root.setTree({
      value: 'a',
      left: {
        value: 'aa',
        left: { value: 'aaa' },
        right: { value: 'aab' },
      },
      right: {
        value: 'ab',
        left: { value: 'aba' },
      },
    });
    // Since classes are sugar coated objects in js this will match it properly
    expect(root).toMatchObject({
      tree: {
        value: 'a',
        left: {
          value: 'aa',
          left: { value: 'aaa' },
          right: { value: 'aab' },
        },
        right: { value: 'ab', left: { value: 'aba' } },
      },
    });
  });

  test('can be traversed via bbreadth-first search', () => {
    const searchResult = root.traverse(TraverseType.breadth_first);
    expect(searchResult).toEqual(['a', 'aa', 'ab', 'aaa', 'aab', 'aba']);
  });

  test('can be traversed via inorder depth-first search', () => {
    const searchResult = root.traverse(TraverseType.inorder_DFS);
    expect(searchResult).toEqual(['aaa', 'aa', 'aab', 'a', 'aba', 'ab']);
  });

  test('can be traversed via preorder depth-first search', () => {
    const searchResult = root.traverse(TraverseType.preorder_DFS);
    expect(searchResult).toEqual(['a', 'aa', 'aaa', 'aab', 'ab', 'aba']);
  });

  test('can be traversed via postorder depth-first search', () => {
    const searchResult = root.traverse(TraverseType.postorder_DFS);
    expect(searchResult).toEqual(['aaa', 'aab', 'aa', 'aba', 'ab', 'a']);
  });

  test('gets correct column values', () => {
    const columnValues = root.getColumn(0);
    expect(columnValues).toEqual(['a', 'aab', 'aba']);
  });
});
