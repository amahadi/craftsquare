class Address < ApplicationRecord
  belongs_to :customer

  include HomemadeInstanceMethods::Address
  include HomemadeCallbackMethods::Address

  after_save :configure_active_address

  geocoded_by :address_string
  after_validation :geocode

end
