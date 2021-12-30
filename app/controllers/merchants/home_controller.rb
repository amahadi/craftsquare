class Merchants::HomeController < Merchants::BaseController
    def index
        @merchant = current_merchant
    end
end
