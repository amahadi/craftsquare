class Advert < ApplicationRecord

    belongs_to :shop
    belongs_to :product
    has_many :variant_configurations, dependent: :destroy

    accepts_nested_attributes_for :variant_configurations

    include Api::Advert
    include HomemadeClassMethods::Advert

    enum status: [:draft, :active, :inactive]
    enum delivery_method: [:both, :pick_up_only, :drop_off_only]
end
