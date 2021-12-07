class Variant < ApplicationRecord
    belongs_to :product
    has_many :variant_options

    accepts_nested_attributes_for :variant_options

    acts_as_taggable_on :ingredients
end
