import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

jest.mock('axios', () => { //jest.mock is always outside the describe scope
    return {
      get: jest.fn( async () => ({
            data : [{
                title: 'Example title 1',
                desc: 'Example desc 1'
            },{
                title: 'Example title 2',
                desc: 'Example desc 2'
            },{
                title: 'Example title 3',
                desc: 'Example desc 3'
            }]
      })),
    };
  });

describe('fecthPosts action', () => {
    
    test('Store is updated correctly', async () => {
        const expectedState = [{
            title: 'Example title 1',
            desc: 'Example desc 1'
        },{
            title: 'Example title 2',
            desc: 'Example desc 2'
        },{
            title: 'Example title 3',
            desc: 'Example desc 3'
        }];
        const store = testStore();

        await store.dispatch(fetchPosts()) //using await here and async on test to replace .then
        const newState = store.getState();
        expect(newState.posts).toEqual(expectedState);

    })
});