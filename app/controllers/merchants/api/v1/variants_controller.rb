class Merchants::Api::V1::VariantsController < Merchants::Api::V1::BaseController

    before_action :product

    def index
        @variants = @product.variants
        return respond_success_with(
            @variants, [:variant_options]
        )
    end

    def show
        @variant = @product.variants.find(params[:id])
        return respond_success_with(@variant)
    end

    def create
        @variants = variants_params[:variants].map do |variant|
            @variant = @product.variants.create!(variant)
            @variant.attributes.merge!({
                    variant_options: @variant.variant_options.map { 
                        |vo| vo.attributes.merge!({
                                value_list: vo.value_list
                            }
                        ) 
                    }
                }
            )
        end
        return respond_success_with(@variants)
    end

    def update
        @variant = @product.variants.find(params[:id])
        @variant.update(variant_params)
        @variant.reload
        return respond_success_with(@variant)
    end

    def destroy
        @variant = @product.variants.find(params[:id])
        @variant.destroy
        return respond_success_with(@variant)
    end

    private

    def variant_params
        params.require(:variant).permit(
            :title, :description, :weight, :weight_unit,
            :inventory_quantity, :price, :ingredient_list,
            :option_list,
            variant_options_attributes: [:title, :value_list]
        )
    end

    def variants_params
        params.permit(
            variants: [
                :title, :description, :weight, :weight_unit,
                :inventory_quantity, :price, :ingredient_list,
                variant_options_attributes: [:title, :value_list]
            ]
        )
    end

    def product
        # TODO: check if the product belongs to the logged in merchant
        @product = Product.find(params[:product_id])
    end
end
