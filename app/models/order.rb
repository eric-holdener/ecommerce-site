class Order < ApplicationRecord
  has_and_belongs_to_many :products

  def self.create_new_order(params)
    print(params)
  end
end
