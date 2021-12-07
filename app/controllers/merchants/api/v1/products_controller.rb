class Merchants::Api::V1::ProductsController < Merchants::Api::V1::BaseController
    
    before_action :shop
    
    def index
        @products = @shop.products
        return respond_success_with(@products)
    end

    def create
        @product = @shop.products.create!(product_params)
        return respond_success_with(@product)
    end

    private

    def product_params
        params.require(:product).permit(
            :title, :description, :status, :published_at,
            :tag_list, :ingredient_list, :product_type_list
        )
    end

    def shop
        @shop = current_merchant.shops.find(params[:shop_id])
    end
end
