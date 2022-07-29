class Product < ApplicationRecord
  has_many :ratings
  has_many :orders
end
