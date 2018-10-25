require 'rails_helper'

feature 'user can edit and delete mural', %Q{
  As a signed up user
  I want to edit and delete a mural
  So that I can view my updated mural information
} do
  scenario 'specify valid credentials' do
    src_file = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")
    user = FactoryBot.create(:user)
    mural = Mural.create({
      title: "Nirvana of Boston",
      description: "the best mural ever",
      location: "funky town",
      photo: src_file,
      upvotes: 0,
      downvotes: 0,
      user_id: user.id
    })

    sign_in user

    visit user_path(user.id)

    click_link "Edit"
    expect(page.find("input#mural_title").value).to eq(mural.title)
    expect(page.find("input#mural_description").value).to eq(mural.description)
    expect(page.find("input#mural_location").value).to eq(mural.location)
    expect(page).to have_content('Photo')

    fill_in 'Title', with: "Basquiat"
    fill_in 'Description', with: "Test Desc"
    fill_in 'Location', with: "The Barbican"
    attach_file :mural_photo, "#{Rails.root}/spec/support/images/BasqWarhol.jpeg"

    click_button "Edit Mural"

    expect(page).to have_content "Mural was edited successfully"
    expect(page).to have_content "Basquiat"
    expect(page).to have_content "Test Desc"
    expect(page).to have_content "The Barbican"
  end

  scenario "user deletes photo" do
    user = FactoryBot.create(:user)
    src_file = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")
    mural = Mural.create({
      title: "Nirvana of Boston",
      description: "the best mural ever",
      location: "funky town",
      photo: src_file,
      upvotes: 0,
      downvotes: 0,
      user_id: user.id
    })

    sign_in user

    visit user_path(user.id)

    click_link "Destroy"

    expect(page).to have_content "Mural was deleted successfully"
    expect(page).not_to have_content mural.title
    expect(page).not_to have_content mural.description
    expect(page).not_to have_content mural.location
  end
end
