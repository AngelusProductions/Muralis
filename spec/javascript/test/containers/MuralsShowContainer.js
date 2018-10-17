
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import MuralsShowContainer from '../../react/containers/MuralsShowContainer';
import MuralShow from '../../react/components/MuralShow';
import fetch from 'isomorphic-fetch';
import fetchMock from 'fetch-mock';

describe('MuralsShowContainer', () => {
  let wrapper;
  let mural;

  beforeEach(() => {
    jasmineEnzyme();

    wrapper = mount(<MuralsShowContainer
                      params={{ id: 1 }}
                    />);

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

    fetchMock.get('/api/v1/murals/1', {
      status: 200,
      body: mural
    });

    spyOn(MuralsShowContainer.prototype, 'componentDidMount').and.callThrough();

  });

  afterEach(fetchMock.restore)

  it('should render state with murals object empty', () => {
    expect(wrapper.state()).toEqual({ mural: {} });
  })

  it('should render a Mural Component', () => {
    expect(wrapper.find(Mural)).toBePresent();
  });

  describe('componentDidMount', () => {
    it('should be invoked when page renders', () => {
      expect(MuralsShowContainer.prototype.componentDidMount).toHaveBeenCalled();
    });

    it('should change the Mural object in the state', () => {
      expect(wrapper.state()).exists().toEqual(true);
    });
  });
});
