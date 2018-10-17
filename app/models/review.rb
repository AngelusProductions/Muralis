class Review < ApplicationRecord
  validates :rating, numericality: { greater_than: 0, less_than_or_equal_to: 10 }

  belongs_to :mural, :user
end
