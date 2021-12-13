class Customers::Api::V1::CustomersController < Customers::Api::V1::BaseController
  def show
    respond_success_with(current_customer)
  end

  def update
    current_customer.update!(customer_params)
    current_customer.reload
    respond_success_with(current_customer)
  end

  private

  def customer_params
    params.require(:customer).permit(
      :first_name, :last_name,
      addresses_attributes: [
        :street, :apartment_number, :suite_number, :city,
        :province, :postal_code, :country, :current,
        :latitude, :longitude
      ]
    )
  end
end
