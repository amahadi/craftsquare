class Address < ApplicationRecord
  belongs_to :customer

  include Instance::Address

  geocoded_by :address_string
  after_validation :geocode

end
