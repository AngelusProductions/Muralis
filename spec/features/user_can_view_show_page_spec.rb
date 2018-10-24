require 'rails_helper'

feature 'user can view show page', %Q{
  As a signed up user
  I want to view my show page
  So that I can view my uploaded user information
} do
  scenario 'specify valid credentials' do
    src_file = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")
    user = FactoryBot.create(:user)
    mural = Mural.create({
      title: "title",
      description: "description",
      location: "location",
      photo: src_file,
      upvotes: 0,
      downvotes: 0,
      user_id: user.id
    })

    visit user_path(user.id)

    expect(page).to have_content(user.first_name)
    expect(page).to have_content(user.last_name)
    expect(page).to have_content(user.username)
    expect(page).to have_content('title')
    expect(page).to have_content('description')
    expect(page).to have_content('location')
  end

end
