class CreateMurals < ActiveRecord::Migration[5.2]
  def change
    create_table :murals do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :location, null: false
      t.string :photo, null: false
      t.integer :upvotes, default: 0
      t.integer :downvotes, default: 0

      t.belongs_to :user, null: false
      t.timestamps null: false
    end
  end
end
