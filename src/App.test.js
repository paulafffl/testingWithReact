import App from './App';
import {shallow} from 'enzyme';
import { findByTestAtrr, testStore } from './../utils';
import React from 'react';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    //console.log(wrapper.debug())
    return wrapper;
};

describe('App Component', () => {
    let wrapper;
    
    beforeEach(() => {
        const initialState =  {
            posts: [{
                title: 'Example title 1',
                body: 'Example body 1'
            },{
                title: 'Example title 2',
                body: 'Example body 2'
            },{
                title: 'Example title 3',
                body: 'Example body 3'
            }]
        }
        wrapper = setUp(initialState);
    })

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })

    it('updatesState() should update as expected', () => {
        let classInstance = wrapper.instance();
        classInstance.updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it('returnsAValue should return value as expected', () => {
        let classInstance = wrapper.instance();
        const newValue = classInstance.returnsAValue(6);
        expect(newValue).toBe(7);
    })

})