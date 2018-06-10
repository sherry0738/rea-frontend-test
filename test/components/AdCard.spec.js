import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdCard from '../../app/components/AdCard';
import React from 'react';

configure({ adapter: new Adapter() });

test('AdCard calls handlePropertyAdd when add button is clicked', () => {
  const property = { id: '1', agency: { brandingColors: { primary: 'test' } } };
  const handlePropertyAdd = jest.fn();

  const wrapper = mount(
    <AdCard
      key="1"
      propertyData={property}
      cardClass="results"
      actionButtonText="Add"
      handleOnClick={handlePropertyAdd}
    />
  );

  const addBtn = wrapper.find('.ant-btn .action-btn');
  addBtn.simulate('click');
  expect(handlePropertyAdd).toBeCalledWith(property);
});
