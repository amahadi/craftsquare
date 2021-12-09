class Merchants::Api::V1::VariantConfigurationsController < Merchants::Api::V1::BaseController

  before_action :advert

  def create
    @variant_configuration = @advert.variant_configurations.create!(variant_params)
    return respond_success_with(@variant_configuration, [], [:selected_options])
  end

  private

  def variant_params
    params.require(:variant_configuration).permit(
      :variant_id, :option_list
    )
  end

  def advert
    # TODO: chack to determine if the merchant has the advert
    @advert = Advert.find(params[:advert_id])
  end
end