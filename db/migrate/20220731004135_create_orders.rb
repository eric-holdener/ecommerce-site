class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.float :total_cost
      t.string :status
      t.datetime :order_date
      t.datetime :ship_date
      t.datetime :deliver_date

      t.timestamps
    end
  end
end
