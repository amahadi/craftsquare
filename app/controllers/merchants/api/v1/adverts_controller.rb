class Merchants::Api::V1::AdvertsController < Merchants::Api::V1::BaseController

  before_action :shop

  def index
    @adverts = @shop.adverts
    return respond_success_with(@adverts)
  end

  def show
    @advert = @shop.adverts.find(params[:id])
    return respond_success_with(@advert, [:delivery_date_times], [:selected_product])
  end

  def create
    @advert = @shop.adverts.create!(advert_params)
    return respond_success_with(@advert, [:delivery_date_times], [:selected_product])
  end

  def update
    @advert = @shop.adverts.find(params[:id])
    @advert.update(advert_params)
    @advert.reload
    return respond_success_with(@advert, [:delivery_date_times], [:selected_product])
  end

  def destroy
    @advert = @shop.adverts.find(params[:id])
    @advert.destroy
    return respond_success_with(@advert)
  end

  private

  def advert_params
    params.require(:advert).permit(
      :product_id, :title, :description, :start_date, :end_date, :status,
      :delivery_method, :note,
      variant_configurations_attributes: [:id, :variant_id, :option_list],
      delivery_date_times_attributes: [:id, :day_of_week, :from_time, :to_time, :delivery_type]
    )
  end

  def shop
    @shop = current_merchant.shops.find(params[:shop_id])
  end
end
