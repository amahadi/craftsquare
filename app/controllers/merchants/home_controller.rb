class Merchants::HomeController < Merchants::BaseController
    def index
        @merchant = current_merchant
        unless @merchant.present?
            redirect_to merchants_sign_in_path
        end
    end
end
