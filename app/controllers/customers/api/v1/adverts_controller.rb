class Customers::Api::V1::AdvertsController < Customers::Api::V1::BaseController

  def index
    @adverts = Advert.all
    return respond_success_with(@adverts)
  end

  def show
    @advert = Advert.find(params[:id])
    return respond_success_with(@advert, [], [:selected_product])
  end
end
