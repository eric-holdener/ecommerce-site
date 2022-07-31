class AddProductKeyToRating < ActiveRecord::Migration[7.0]
  def change
    add_reference :ratings, :product, foreign_key: true
  end
end
