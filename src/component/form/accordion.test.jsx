import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Accordion from './accordion';

configure({ adapter: new Adapter() });

describe('<Accordion/>', () => {
    const props = {
    };

    describe('render', () => {
        it('with default/required props', () => {
            const c = shallow(<Accordion {...props} />);

            expect(c).toMatchSnapshot();
        });
    });
});
