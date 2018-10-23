import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import MuralShowContainer from '../../../../app/javascript/react/containers/MuralShowContainer';
import MuralShow from '../../../../app/javascript/react/components/MuralShow';
import fetchMock from 'fetch-mock'

describe('MuralShow', () => {
  let wrapper;
  let mural;
  beforeEach(() => {
    jasmineEnzyme();

    mural = {
      id: 1,
      title: "Mona Lisa",
      description: "She smiles",
      location: "The Louvre",
      photo: {
        url: '/assets/funny_mona_lisa.jpg'
      },
      upvotes: 0,
      downvotes: 0,
      user_id: 1,
      updated_at: "",
      created_at: ""
    }

    wrapper = mount(
      <MuralShow
        mural = {mural}
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
