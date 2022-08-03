class Order < ApplicationRecord
  has_and_belongs_to_many :products
  belongs_to :discount, optional: true

  def self.create_new_order(params)
    cart = params[:cart]
    total_cost = 0.00
    user_id = nil
    discount_id = nil
    discount_percent = 0
    if params[:userId]
      user_id = params[:userId]
    end

    if params[:discount]
      discount = params[:discount]
      discount_id = params[:discount][:discount_id]
      discount_percent = params[:discount][:percent]
    end
    cart.map do |product|
      total_cost = total_cost + (product[:price] * product[:quantity])
    end
    total_cost = total_cost.round(2)
    total_cost -= (total_cost * discount_percent)
    order = Order.create(
      total_cost: total_cost, status: "confirmed", order_date: Time.now,
      ship_date: nil, deliver_date: nil,
      shipping_address: params[:shippingAddress], billing_address: params[:billingAddress],
      user_id: user_id, first_name: params[:firstName], last_name: params[:lastName],
      email: params[:email], phone: params[:phone], discount_id: discount_id
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
