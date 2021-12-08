class Merchants::Api::V1::AdvertsController < Merchants::Api::V1::BaseController

  before_action :shop

  def create
    @advert = @shop.adverts.create!(advert_params)
    return respond_success_with(@advert, [:product, :variant_configurations])
  end

  private

  def advert_params
    params.require(:advert).permit(
      :product_id, :title, :description, :start_date, :end_date,
      variant_configurations_attributes: [:variant_id, :option_list]
    )
  end

  def shop
    @shop = current_merchant.shops.find(params[:shop_id])
  end
end
