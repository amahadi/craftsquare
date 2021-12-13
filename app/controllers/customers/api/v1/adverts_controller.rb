class Customers::Api::V1::AdvertsController < Customers::Api::V1::BaseController

  include Customers::Api::V1::Adverts

  def index
    @adverts = adverts
    return respond_success_with(@adverts)
  end

  def show
    @advert = Advert.find(params[:id])
    return respond_success_with(@advert, [], [:selected_product])
  end
end
