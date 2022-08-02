class Product < ApplicationRecord
  has_and_belongs_to_many :orders
  has_many :ratings

  def self.all_categories
    Product.distinct.pluck(:category)
  end
end
