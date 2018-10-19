require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    first_name { 'name' }
    last_name { 'name' }
    user_photo { 'photo' }
    username { 'user' }
  end

  factory :mural do
    title { 'title' }
    description { 'description' }
    location { 'location' }
    photo { 'photo' }
    upvotes { 'upvotes' }
    downvotes { 'downvotes' }
    user_id { Mural.all.last.id }
  end

end
