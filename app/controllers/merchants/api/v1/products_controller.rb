class Merchants::Api::V1::ProductsController < Merchants::Api::V1::BaseController

    before_action :shop

    def index
        @products = @shop.products
        return respond_success_with(@products, [], [:images])
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

    def image_params
        params[:product][:images].map do |img|
            if img[:data].present?
                {
                    data: img[:data],
                    filename: img[:filename],
                    content_type: img[:content_type]
                }
            else
                # TODO: Need to define proper way of doing that
                data = Base64.encode64(File.read(img[:src])) # for opening file from local storage
                # data = Base64.encode64(File.read(open(img[:src]))) # for opening file from aws or any external source
                {
                    data: "data:#{img[:content_type]};base64,#{data}",
                    filename: img[:filename],
                    content_type: img[:content_type]
                }
            end
        end
    end

    def shop
        @shop = current_merchant.shops.find(params[:shop_id])
    end
end
