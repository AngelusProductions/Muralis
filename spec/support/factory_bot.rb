require 'factory_bot'

FactoryBot.define do
  photo = File.new("#{Rails.root}/spec/support/images/BasqWarhol.jpeg")

  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'Jerry' }
    last_name { 'Seinfeld' }
    user_photo { photo }
    username { 'JSeinfeld' }
  end

end
