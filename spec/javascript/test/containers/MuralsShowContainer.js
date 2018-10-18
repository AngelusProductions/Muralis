
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import MuralsShowContainer from '../../../../app/javascript/react/containers/MuralsShowContainer';
import MuralShow from '../../../../app/javascript/react/components/MuralShow';
import fetchMock from 'fetch-mock'

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
    let cdm = jasmine.createSpy('componentDidMount'); //<-- this is new

  });

  afterEach(fetchMock.restore)

  it('should render state with murals object empty', () => {
    expect(wrapper.state()).toEqual({ mural: {} });
  })

  it('should render a Mural Component', () => {
    expect(wrapper.find(MuralShow)).toBePresent();
  });
});
