class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def get_category
    if params[:category] == "all"
      @products = Product.all
    elsif params[:category]
      @products = Product.where(category: params[:category])
    end
    print(@products.to_json)
    render json: @products
  end

  def get_product
    @product = Product.find(params[:id])
    print(@products.to_json)
    render json: @product
  end

  def all_categories
    @categories = Product.all_categories
    render json: @categories
  end
end