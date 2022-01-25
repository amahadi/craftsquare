class Variant < ApplicationRecord
    belongs_to :product
    has_many :variant_options

    include ObjectFile

    accepts_nested_attributes_for :variant_options

    has_many_base64_attached :images

    acts_as_taggable_on :ingredients

    enum status: [:active, :deleted]
end
