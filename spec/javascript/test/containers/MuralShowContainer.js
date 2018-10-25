
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import MuralShowContainer from '../../../../app/javascript/react/containers/MuralShowContainer';
import MuralShow from '../../../../app/javascript/react/components/MuralShow';
import fetchMock from 'fetch-mock'

describe('MuralShowContainer', () => {
  let wrapper;
  let mural;
  let reviews;
  let currentUser;

  beforeEach(() => {
    jasmineEnzyme();

    mural = {
      id: 1,
      title: "Mona Lisa",
      description: "She smiles",
      location: "The Louvre",
      photo: {
        url: '../../../../spec/support/images/BasqWarhol.jpq'
      },
      upvotes: 0,
      downvotes: 0,
      user_id: 1,
      updated_at: "",
      created_at: ""
    }
    reviews = [
      {
        id: 1,
        comment: "This mural was just okay",
        rating: 5,
        created_at: "",
        updated_at: "",
        mural_id: 1,
        user_id: 1
      }
    ]
    currentUser = {
      id: 1,
      first_name: "Junaid",
      last_name: "Siddiqui",
      user_photo: "",
      username: "",
      email: "google@gmail.com",
      created_at: "",
      updated_at: ""
    }

    fetchMock.get(`/api/v1/murals/${mural.id}`, {
      status: 200,
      body: mural
    });
    fetchMock.get(`/api/v1/user`, {
      status: 200,
      body: currentUser
    });
    fetchMock.get(`/api/v1/reviews`, {
      status: 200,
      body: reviews
    });

    wrapper = mount(<MuralShowContainer
                      params={{ id: mural.id }}
                    />);

  });

  afterEach(fetchMock.restore)

  it('should render state with murals object empty', () => {
    expect(wrapper.state("mural")).toEqual({
        id: 0,
        title: "",
        description: "",
        location: "",
        photo: {
          url: '',
          },
        upvotes: 0,
        downvotes: 0,
        user_id: 0,
        created_at: "",
        updated_at: ""
        }
      );
    })

  it('should render a Mural Component', () => {
    expect(wrapper.find(MuralShow)).toBePresent();
  });
  
  it('should render correct components after the fetch calls are finished', (done) => {
    setTimeout( () => {
      expect(wrapper.find('MuralShow').find('h1').text()).toMatch(mural.title)
      expect(wrapper.find('MuralShow').find('h5').text()).toMatch(mural.location)
      expect(wrapper.find('MuralShow').find('p').text()).toMatch(mural.description)
      expect(wrapper.find('ReviewTile').find('p').text()).toMatch(reviews[0].comment)
      expect(wrapper.find('ReviewTile').find('p').text()).toContain(reviews[0].rating)
      expect(wrapper.find('ReviewForm').find('form').simulate('submit'))
      done()
    }, 0)
  });
});
