class Merchants::Api::V1::ShopsController < Merchants::Api::V1::BaseController
  def index
    @shops = current_merchant.shops
    return render json: respond_success_with(@shops)
  end

  def show
    @shop = current_merchant.shops.find(params[:id])
    return render json: respond_success_with(@shop)
  end

  def create
    @shop = current_merchant.shops.create!(shop_params)
    return render json: respond_success_with(@shop)
  end

  def update
    @shop = Shop.find(params[:id])
    @shop.update!(shop_params)
    @shop.reload
    return render json: respond_success_with(@shop)
  end

  private

  def shop_params
    params.require(:shop).permit(
      :name, :street_number, :street_name, :apartment_number,
      :suite_number, :postal_code, :city, :province, :country,
      :latitude, :longitude, :currency, :language, :timezone,
      :tag_list

      # TODO: Need to assign country_code
      # TODO: Need to assign categories
    )
  end
end
