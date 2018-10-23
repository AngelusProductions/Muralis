require "rails_helper"

feature "visitors can add new murals" do
  scenario "user adds new mural successfully" do
    @user = User.create!(first_name: "Josh",last_name: "Wyman",email:"google2@gmail.com",password:"123456")
    sign_in @user

    visit new_mural_path
    expect(page).to have_content "New Mural Form"

    photo = "#{Rails.root}/spec/support/images/Josh_Headshot_September18_under_1MB.jpg"

    fill_in 'Title', with: "Basquiat"
    fill_in 'Description', with: "Test Desc"
    fill_in 'Location', with: "The Barbican"
<<<<<<< HEAD
    attach_file "Photo", photo
=======
    attach_file "Photo", "#{Rails.root}/spec/support/images/BasqWarhol.jpeg"
>>>>>>> 22d119ba1bcec916de77ec22eed19db6f500c52b

    click_button "Add Mural"

    expect(page).to have_content "Mural was successfully created"
    expect(page).to have_content "Basquiat"
  end

  scenario "user does not provide expected information for a mural" do
    @user = User.create!(first_name: "Josh", last_name: "Wyman", email:"google1@gmail.com", password:"123456")
    sign_in @user

    visit new_mural_path
    expect(page).to have_content "New Mural Form"

    click_button "Add Mural"
    expect(page).to have_content "Title can't be blank"
    expect(page).to have_content "Description can't be blank"
    expect(page).to have_content "Location can't be blank"
    expect(page).to have_content "Photo can't be blank"
  end
end
