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
    render json: @products
  end

  def get_product
    @product = Product.find(params[:id])
    render json: @product, include: ['ratings']
  end

  def all_categories
    @categories = Product.all_categories
    render json: @categories
  end
end