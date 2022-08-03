class Order < ApplicationRecord
  has_and_belongs_to_many :products
  has_one :discount, optional: true

  def self.create_new_order(params)
    cart = params[:cart]
    total_cost = 0.00
    user_id = nil
    if params[:userId]
      user_id = params[:userId]
    end
    cart.map do |product|
      total_cost = total_cost + (product[:price] * product[:quantity])
    end
    total_cost = total_cost.round(2)
    order = Order.create(
      total_cost: total_cost, status: "confirmed", order_date: Time.now,
      ship_date: nil, deliver_date: nil,
      shipping_address: params[:shippingAddress], billing_address: params[:billingAddress],
      user_id: user_id, first_name: params[:firstName], last_name: params[:lastName],
      email: params[:email], phone: params[:phone]
    )

    cart.map do |product|
      p = Product.find(product[:id])
      for i in 1..product[:quantity]
        p.orders << order
      end
    end

    order
  end
end
