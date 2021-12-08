class Merchants::Api::V1::ProductsController < Merchants::Api::V1::BaseController

    before_action :shop

    def index
        @products = @shop.products
        return respond_success_with(@products, [:variants], [:images])
    end

    def show
        @product = @shop.products.find(params[:id])
        return respond_success_with(@product, [], [:images])
    end

    def create
        @product = @shop.products.create!(product_params)
        return respond_success_with(@product, [], [:images])
    end

    def update
        @product = @shop.products.find(params[:id])
        @product.update(product_params)
        @product.reload
        return respond_success_with(@product, [], [:images])
    end

    private

    def product_params
        params[:product][:images] = image_params
        params.require(:product).permit(
            :title, :description, :status, :published_at,
            :tag_list, :ingredient_list, :product_type_list,
            images: [:data, :filename, :content_type]
        )
    end

    def shop
        @shop = current_merchant.shops.find(params[:shop_id])
    end
end
