require 'rails_helper'

# [] Visiting the `/restaurants` path should contain a list of restaurants.
# [] Visiting the `/restaurants/10` path should show the restaurant details for a restaurant with the ID of 10.
# [] Visiting the root path should display a list of all restaurants.

feature "visitor sees a list of murals" do
  scenario "sees a list of murals" do
    src_file = File.new("#{Rails.root}/spec/support/images/Josh_Headshot_September18_under_1MB.jpg")
    testuser = User.create!(first_name: 'Name', last_name: 'last', email: 'happyboi@gmail', password: '12345678')
    src_file = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")
    mural_1 = Mural.create!(title: 'Dumpling King', description: 'Dumps for days', location: 'Boston', user_id: testuser.id, photo: src_file)
    mural_2 = Mural.create!(title: 'Donut Boy', description: 'Dodos for days', location: 'Boston', user_id: testuser.id, photo: src_file)

    visit murals_path

    expect(page).to have_content "Donut Boy"
    expect(page).to have_content "Dumpling King"

  end
end
