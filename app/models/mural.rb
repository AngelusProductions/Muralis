class Mural < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :photo, presence: true
  validates :upvotes, presence: true
  validates :downvotes, presence: true

  belongs_to :user
  has_many :reviews
end
