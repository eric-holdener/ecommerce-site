class Api::V1::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  # GET /products
  # GET /products.json
  def index
    @products = Product.all
    render json: @products
  end

  # GET /products/1
  # GET /products/1.json
  def show
    if @product
      render json: @product
    else
      render json: @product.errors
    end
  end

  # GET /products/new
  def new
    @product = Product.new
  end

  # GET /products/1/edit
  def edit
  end

  # POST /products
  # POST /products.json
  def create
    @product = Product.new(product_params)


    if @product.save
      render json: @product
    else
      render json: @product.errors
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  def update
  end

  # DELETE /products/1
  # DELETE /products/1.json
  def destroy
    @product.destroy

    render json: { notice: 'Product was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.permit(:category, :title, :price)
    end
end
