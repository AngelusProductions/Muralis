require 'factory_bot'

FactoryBot.define do
  photo = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")

  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'name' }
    last_name { 'name' }
    user_photo { photo }
    username { 'user' }
  end

end
