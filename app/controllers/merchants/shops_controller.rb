class Merchants::ShopsController < Merchants::BaseController
    def show
        @shop = current_merchant.shops.find(params[:id])
        @merchant = current_merchant
    end
end
