class Merchants::Api::V1::VariantsController < Merchants::Api::V1::BaseController

    before_action :product

    def index
        @variants = @product.variants
        return render json: respond_success_with(@variants)
    end

    def show
        @variant = @product.variants.find(params[:id])
        return render json: respond_success_with(@variant)
    end

    def create
        @variants = variants_params[:variants].map do |variant|
            @product.variants.create!(variant)
        end
        return render json: respond_success_with(@variants)
    end

    def update
        @variant = @product.variants.find(params[:id])
        @variant.update(variant_params)
        @variant.reload
        return render json: respond_success_with(@variant)
    end

    def destroy
        @variant = @product.variants.find(params[:id])
        @variant.destroy
        return render json: respond_success_with(@variant)
    end

    private

    def variant_params
        params.require(:variant).permit(
            :title, :description, :weight, :weight_unit,
            :inventory_quantity, :price, :ingredient_list
        )
    end

    def variants_params
        params.permit(
            variants: [
                :title, :description, :weight, :weight_unit,
                :inventory_quantity, :price, :ingredient_list
            ]
        )
    end

    def product
        # TODO: check if the product belongs to the logged in merchant
        @product = Product.find(params[:product_id])
    end
end
