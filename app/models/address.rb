class Address < ApplicationRecord
  belongs_to :customer

  include HomemadeInstanceMethods::Address
  include HomemadeCallbackMethods::Address
  include HomemadeClassMethods::Address
  include HomemadeValidations::Address

  validates :street, presence: { message: I18n.t('errors.model.address.validation.presence.street') }
  validates :city, presence: { message: I18n.t('errors.model.address.validation.presence.city') }
  validates :province, presence: { message: I18n.t('errors.model.address.validation.presence.province') }
  validates :postal_code, presence: { message: I18n.t('errors.model.address.validation.presence.postal_code') }
  validates :country, presence: { message: I18n.t('errors.model.address.validation.presence.country') }

  after_save :configure_active_address

  geocoded_by :address_string
  after_validation :geocode

end
