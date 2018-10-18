class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :comment
      t.integer :rating, null: false

      t.timestamps null: false

      t.belongs_to :mural
      t.belongs_to :user
    end
  end
end
