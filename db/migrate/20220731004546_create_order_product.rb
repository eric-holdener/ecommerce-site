class CreateOrderProduct < ActiveRecord::Migration[7.0]
  def change
    create_table :order_products do |t|
      t.integer :product_id
      t.integer :order_id
      t.timestamps
    end
  end
end
