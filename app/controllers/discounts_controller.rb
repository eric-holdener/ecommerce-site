class DiscountsController < ApplicationController
  before_action :set_discount, only: %i[ show edit update destroy ]

  # GET /discounts/1 or /discounts/1.json
  def show
    @discount = Discount.find(params[:id])
    render json: @discount
  end

  # GET /discounts/new


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_discount
      @discount = Discount.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def discount_params
      params.fetch(:discount, {})
    end
end
