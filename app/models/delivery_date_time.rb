class DeliveryDateTime < ApplicationRecord
  belongs_to :advert

  include CS::Validations::DeliveryDateTime

  enum weekday: [:sunday, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday]
  enum delivery_type: [:pick_up_and_drop_off, :pick_up_only, :drop_off_only]

  validates :weekday, presence: { message: I18n.t('errors.model.delivery_date_time.validation.presence.weekday') }
  validates :from_time, presence: { message: I18n.t('errors.model.delivery_date_time.validation.presence.from_time') }
  validates :to_time, presence: { message: I18n.t('errors.model.delivery_date_time.validation.presence.to_time') }
  validates :delivery_type, presence: { message: I18n.t('errors.model.delivery_date_time.validation.presence.delivery_type') }
  validate :from_time_is_less_than_to_time

end
