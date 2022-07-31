class RenameOrderProducts < ActiveRecord::Migration[7.0]
  def change
    rename_table :order_products, :orders_products
  end
end
