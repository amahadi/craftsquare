class DeliveryDateTime < ApplicationRecord
  belongs_to :advert

  enum delivery_type: [:pick_up_and_drop_off, :pick_up_only, :drop_off_only]
end
