class Merchants::Api::V1::ProductsController < Merchants::Api::V1::BaseController

    before_action :shop

    def index
        @products = @shop.products.includes(:variants).where(variants: { status: 'active' })
        return respond_success_with(@products, [:variants], [:images])
    end

    def show
        @product = @shop.products.find(params[:id])
        @product.variants = @product.variants.where(status: 'active')
            .includes(:variant_options)
            .where(variant_options: { status: 'active' })
        return respond_success_with(@product,
            [
                { variants: { include: [:variant_options] } }
            ],
            [:images]
        )
    end

    def create
        @product = @shop.products.create!(product_params)
        return respond_success_with(@product,
            [
                { variants: { include: [:variant_options] } }
            ],
            [:images]
        )
    end

    def update
        @product = @shop.products.find(params[:id])
        @product.update(product_params)
        @product.reload
        return respond_success_with(@product, [], [:images])
    end

    def destroy
        @product = @shop.products.find(params[:id])
        @product.update(status: 'deleted')
        @product.reload
        return respond_success_with(@product, [], [:images])
    end

    private

    def product_params
        params[:product][:images] = image_params_from(params[:product][:images])
        parse_variant_images
        params.require(:product).permit(
            :title, :description, :status, :published_at,
            :tag_list, :ingredient_list, :product_type_list,
            images: [:data, :filename, :content_type],
            variants_attributes: [
                :title, :description, :weight, :weight_unit,
                :inventory_quantity, :price, :ingredient_list,
                # images: [:data, :filename, :content_type],
                variant_options_attributes: [:title, :value_list]
            ]
        )
    end

    def parse_variant_images
        params[:product][:variants_attributes]&.each do |variant|
            variant[:images] = image_params_from(variant[:images])
        end
    end

    def shop
        @shop = current_merchant.shops.find(params[:shop_id])
    end
end
