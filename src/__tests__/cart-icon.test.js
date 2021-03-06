import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { CartIcon } from '../components/cart-icon/cart-icon.component'

describe('CartIcon', () => {
	it('should render without crashing', () => {
		const props = {
			toggleCart: jest.fn(),
			itemCount: 0,
		}
		const wrapper = shallow(<CartIcon {...props} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})
