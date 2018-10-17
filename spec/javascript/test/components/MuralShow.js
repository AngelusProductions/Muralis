import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import MuralsShowContainer from '../../react/containers/MuralsShowContainer';
import MuralShow from '../../react/components/MuralShow';

describe('Mural', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = mount(
      <MuralShow
        title="Mona Lisa"
        description="She smiles"
        location="The Louvre"
        photo='/assets/funny_mona_lisa.jpg'
      />
    );
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });

  it('should render an h1 tag with the text property value', () => {
    expect(wrapper.find('h1').text()).toBe('Mona Lisa');
  });

  it('should render an h5 tag', () => {
    expect(wrapper.find('h5')).toBePresent();
  });

  it('should render an h5 tag with the text property value', () => {
    expect(wrapper.find('h5').text()).toBe('location: The Louvre');
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render a p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe('She smiles');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: '/assets/funny_mona_lisa.jpg'
    });
  });
});
