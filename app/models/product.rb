class Product < ApplicationRecord
  has_and_belongs_to_many :orders
  has_many :ratings

  def self.search_products(category = nil, product_id = nil)
    a = Product
    a = a.where('category = ?', category) if category.present?
    a = a.where('id = ?', product_id) if product_id.present?
    a
  end
end
