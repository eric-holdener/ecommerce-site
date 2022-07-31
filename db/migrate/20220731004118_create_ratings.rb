class CreateRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :ratings do |t|
      t.integer :stars
      t.text :comment

      t.timestamps
    end
  end
end
