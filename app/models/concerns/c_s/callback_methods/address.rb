module CS::CallbackMethods::Address
  extend ActiveSupport::Concern

  def configure_active_address
    if current
      current_addresses.each do |address|
        unless address.id == id
          address.update(current: false)
        end
      end
    end
  end

  def current_addresses
    customer.addresses.where(current: true)
  end
end