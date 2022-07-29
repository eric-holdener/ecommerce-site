class FixOrderProduct < ActiveRecord::Migration[7.0]
  def change
    drop_table :orders_products

    create_table :orders_products, id: false do |t|
      t.belongs_to :order
      t.belongs_to :product
    end
  end
end
