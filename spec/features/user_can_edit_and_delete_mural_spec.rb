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
      title: "title",
      description: "description",
      location: "location",
      photo: src_file,
      upvotes: 0,
      downvotes: 0,
      user_id: user.id
    })

    sign_in user

    visit edit_mural_path(mural.id)

    binding.pry
    click_button "Edit"

    expect(page).to have_content('Title')
    expect(page).to have_content('Description')
    expect(page).to have_content('Location')
    expect(page).to have_content('Photo')

    fill_in 'Title', with: "Basquiat"
    fill_in 'Description', with: "Test Desc"
    fill_in 'Location', with: "The Barbican"

    binding.pry
    click_link "Edit Mural"

    expect(page).to have_content "Mural was edited successfully"
    expect(page).to have_content "Basquiat"
    expect(page).to have_content "Test Desc"
    expect(page).to have_content "The Barbican"
  end

  scenario "user deletes photo" do
    user = FactoryBot.create(:user)
    src_file = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")
    mural = Mural.create({
      title: "title",
      description: "description",
      location: "location",
      photo: src_file,
      upvotes: 0,
      downvotes: 0,
      user_id: user.id
    })

    sign_in user

    visit user_path(user.id)

    click_button "Destroy"

    expect(page).to have_content "Mural was deleted successfully"
    expect("description").not_to be_present
    expect("location").not_to be_present
  end
end
