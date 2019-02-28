import React from 'react'
import  ImgList from './ImgList';
import {shallow} from 'enzyme'
it('renders without crashing', () => {
  let ImgList = Array(9).fill(null)
  shallow(<ImgList Img={Img}/>);
});
it('calls onClick event on click of an img', () =>{
  let ImgList = Array(9).fill(null)
  const onClick = jest.fn();
  let wrapper = mount(<ImgList Img={Img} onClick={onClick}/>);
  wrapper.find('button.img').first().simulate('click');
  expect(onClick).toBeCalledWith(0)
})