class Review < ApplicationRecord
  validates :rating, presence: true, numericality: { greater_than: 0, less_than_or_equal_to: 10 }

  belongs_to :mural, :user
end
