class Merchants::Api::V1::VariantConfigurationsController < Merchants::Api::V1::BaseController

  before_action :advert

  def index
    @variant_configurations = @advert.variant_configurations
    return respond_success_with(@variant_configurations, [], [:selected_variants])
  end

  def show
    @variant_configuration = @advert.variant_configurations.find(params[:id])
    return respond_success_with(@variant_configuration, [], [:selected_variants])
  end

  def create
    @variant_configuration = @advert.variant_configurations.create!(variant_params)
    return respond_success_with(@variant_configuration, [], [:selected_variants])
  end

  def update
    @variant_configuration = @advert.variant_configurations.find(params[:id])
    @variant_configuration.update!(variant_params)
    @variant_configuration.reload
    return respond_success_with(@variant_configuration, [], [:selected_variants])
  end

  def delete
    @variant_configuration = @advert.variant_configurations.find(params[:id])
    @variant_configuration.destroy
    return respond_success_with(@variant_configuration)
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