import { LinkedList } from './LinkedList'
describe('LinkedList', ()=> {
  it('initalize empty list', ()=> {
    const list = new LinkedList();

    expect(list).toBeInstanceOf(LinkedList);
    expect(list.length).toBe(0);
  })
});