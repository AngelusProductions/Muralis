require 'rails_helper'

feature 'user can view show page', %Q{
  As a signed up user
  I want to view my show page
  So that I can view my uploaded user information
} do
  scenario 'specify valid credentials' do
    user = FactoryBot.create(:user)
    mural = Mural.create!({
      title: "title",
      description: "description",
      location: "location",
      photo: "https://muralis-development.s3.amazonaws.com/uploads/mural/photo/19/IMG_2570.jpg",
      upvotes: 0,
      downvotes: 0,
      user_id: user.id
    })

    visit user_path(user.id)

    binding.pry

    expect(page).to have_content('Josh Wyman')
    expect(page).to have_content('bigfootLumberjack34')
    expect(page).to have_content('Street Art in NH')
    expect(page).to have_content('Saw this on my way to work')
    expect(page).to have_content('Grandmum\'s')
  end

end
