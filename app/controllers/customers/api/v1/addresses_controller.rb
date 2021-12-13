class Customers::Api::V1::AddressesController < Customers::Api::V1::BaseController

  def index
    @addresses = current_customer.addresses
    return respond_success_with(@addresses)
  end

  def show
    @address = current_customer.addresses.find(params[:id])
    return respond_success_with(@address)
  end

  def create
    @address = current_customer.addresses.create(address_params)
    return respond_success_with(@address)
  end

  def update
    @address = current_customer.addresses.find(params[:id])
    @address.update(address_params)
    @address.reload
    respond_success_with(@address)
  end

  def destroy
    @address = current_customer.addresses.find(params[:id])
    @address.destroy
    respond_success_with(@address)
  end

  private

  def address_params
    params.require(:address).permit(
      :street, :apartment_number, :suite_number, :city,
      :province, :postal_code, :country, :current,
      :latitude, :longitude
    )
  end
end
