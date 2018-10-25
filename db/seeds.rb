user_photo_1 = File.new("#{Rails.root}/app/assets/images/blue_mural_lynn.jpg")
user_photo_2 = File.new("#{Rails.root}/app/assets/images/funny_mona_lisa.jpg")
user_photo_3 = File.new("#{Rails.root}/app/assets/images/banksy-paris-france.jpg")
user_photo_4 = File.new("#{Rails.root}/app/assets/images/Red_Lady.jpg")

users_seeds = [
{first_name: "Corey", last_name: "Angelus", user_photo: user_photo_1, username: "coreyangelus", email: "angelusproductions@gmail.com", password: 123456},
{first_name: "Mona", last_name: "Lisa", user_photo: user_photo_2, username: "monalisa", email: "leodav@gmail.com", password: 123456},
{first_name: "The", last_name: "Mango Incident", user_photo: user_photo_3, username: "themangoincident", email: "tmi@gmail.com", password: 123456},
{first_name: "admin", last_name: "admin", user_photo: user_photo_4, username: "admincoolguy", email: "admin@gmail.com", password: 123456, role: "admin"}
]
users_seeds.each do |seed|
User.create(seed)
end
