class Mural < ApplicationRecord
  validates_presence_of :title, :description, :location, :photo, :upvotes, :downvotes

  belongs_to :user
  has_many :reviews
end
