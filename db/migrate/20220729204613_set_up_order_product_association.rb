class SetUpOrderProductAssociation < ActiveRecord::Migration[7.0]
  def change
    drop_table :order_products

    create_table :orders_products, id: false do |t|
      t.belongs_to :order
      t.belongs_to :part
    end
  end
end
