import BinarySearchTree from './BinarySearchTree';
import BinaryTree from './BinaryTree';

const SearchTree = new BinarySearchTree({
  value: 0,
  left: { value: 1 },
  right: { value: 2 },
});
describe('BinarySearchTree', () => {
  test('is instance of BinaryTree', () => {
    expect(SearchTree).toBeInstanceOf(BinaryTree);
  });
  test('can search for given value', () => {
    expect(SearchTree.has(1)).toBe(true);
    expect(SearchTree.has(-1)).toBe(false);
    expect(SearchTree.has(2)).toBe(true);
  });
});
