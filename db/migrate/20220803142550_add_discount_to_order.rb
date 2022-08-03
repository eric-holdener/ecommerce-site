class AddDiscountToOrder < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :discount_id, :integer
  end
end
