class DiscountsController < ApplicationController
  before_action :set_discount, only: %i[ show edit update destroy ]

  # GET /discounts/1 or /discounts/1.json
  def show
    if Discount.where(code: params[:code]).empty?
      @discount = {percent: 0}
    else
      @discount = Discount.where(code: params[:code])
    end
    render json: @discount
  end

  # GET /discounts/new


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_discount
      if Discount.where(code: params[:code]).empty?
        @discount = {percent: 0}
      else
        @discount = Discount.where(code: params[:code])
      end
    end

    # Only allow a list of trusted parameters through.
    def discount_params
      params.fetch(:discount, {})
    end
end
