class Advert < ApplicationRecord

    belongs_to :shop
    belongs_to :product
    has_many :variant_configurations, dependent: :destroy

    accepts_nested_attributes_for :variant_configurations

    include Api::Advert
end
