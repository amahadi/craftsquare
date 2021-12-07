class Merchants::Api::V1::ShopsController < Merchants::Api::V1::BaseController
  def index
    @shops = current_merchant.shops
    return render json: respond_successfull_with(@shops)
  end
end
