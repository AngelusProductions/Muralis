
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import MuralShowContainer from '../../../../app/javascript/react/containers/MuralShowContainer';
import MuralShow from '../../../../app/javascript/react/components/MuralShow';
import fetchMock from 'fetch-mock'

describe('MuralShowContainer', () => {
  let wrapper;
  let mural;

  beforeEach(() => {
    jasmineEnzyme();

    mural = {
      id: 1,
      title: "Mona Lisa",
      description: "She smiles",
      location: "The Louvre",
      photo: '/assets/funny_mona_lisa.jpg',
      upvotes: 0,
      downvotes: 0,
      user_id: 1
    }

    fetchMock.get(`/api/v1/murals/${mural.id}`, {
      status: 200,
      body: mural
    });

    wrapper = mount(<MuralShowContainer
                      params={{ id: mural.id }}
                    />);

  });

  afterEach(fetchMock.restore)

  it('should render state with murals object empty', () => {
    expect(wrapper.state()).toEqual({ mural: {} });
  })

  it('should render a Mural Component', () => {
    expect(wrapper.find(MuralShow)).toBePresent();
  });

  it('should render correct text after the fetch call', (done) => {
    setTimeout( () => {
      expect(wrapper.find('h1').text()).toMatch(mural.title)
      expect(wrapper.find('h5').text()).toMatch(mural.location)
      expect(wrapper.find('p').text()).toMatch(mural.description)
      done()
    }, 0)
  });
});
