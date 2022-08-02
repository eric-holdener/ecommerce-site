class AddFieldsToOrders < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :shipping_address, :string
    add_column :orders, :billing_address, :string
    add_column :orders, :user_id, :integer
    add_column :orders, :first_name, :string
    add_column :orders, :last_name, :string
    add_column :orders, :email, :string
    add_column :orders, :phone, :string
  end
end
