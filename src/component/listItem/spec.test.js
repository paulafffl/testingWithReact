import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../../utils/index';
import ListItem from './index';
import { italics } from 'prop-types/lib/ReactPropTypesSecret';
import checkPropTypes from 'check-prop-types';

describe('ListItem Component', () =>{

    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Title test',
                desc: 'Desc test'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Title test',
                desc: 'Desc test'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });
        it('Should renders without error', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });
        it('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });
        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('It should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Desc test'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });
        it('Component is not rendered', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })

    })


});