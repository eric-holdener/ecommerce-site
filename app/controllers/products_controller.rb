class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def show_category
    if params[:category] == "All"
      @products = Product.all
    elsif params[:category]
      @products = Product.where(category: params[:category])
    end
    render json: @products
  end

  def show_product
    @product = Product.find(params[:id])
    render json: @product
  end

  def all_categories
    @categories = Product.all_categories
    render json: @categories
  end
end