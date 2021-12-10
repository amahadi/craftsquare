class Merchants::Api::V1::MerchantsController < Merchants::Api::V1::BaseController

    def show
        return respond_success_with(current_merchant)
    end

    def update
        current_merchant.update(merchant_params)
        current_merchant.reload
        return respond_success_with(current_merchant)
    end

    private

    def merchant_params
        params.require(:merchant).permit(
            :first_name, :last_name, :date_of_birth
        )
    end
end
