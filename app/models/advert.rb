class Advert < ApplicationRecord

    belongs_to :shop
    belongs_to :product
    has_many :variant_configurations

    accepts_nested_attributes_for :variant_configurations
end
