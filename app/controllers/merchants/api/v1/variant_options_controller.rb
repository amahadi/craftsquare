class Merchants::Api::V1::VariantOptionsController < Merchants::Api::V1::BaseController

  before_action :variant

  def create
    @variant_option = variant.variant_options.create!(variant_option_params)
    return respond_success_with(@variant_option)
  end

  def update
    @variant_option = @variant.variant_options.find(params[:id])
    @variant_option.update!(variant_option_params)
    @variant_option.reload
    return respond_success_with(@variant_option)
  end

  def destroy
    @variant_option = @variant.variant_options.find(params[:id])
    @variant_option.update!(status: 'deleted')
    @variant_option.reload
    return respond_success_with(@variant_option)
  end

  private

  def variant_option_params
    params.require(:variant_option).permit(
      :title, :value_list
    )
  end

  def variant
    # TODO: check if the variant belongs to the logged in merchant
    @variant = Variant.find(params[:variant_id])
  end
end
