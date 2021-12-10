class Product < ApplicationRecord
    belongs_to :shop
    has_many :variants
    has_many :adverts

    include ObjectFile

    acts_as_taggable_on :tags, :ingredients, :product_types

    has_many_base64_attached :images

    enum status: [:draft, :active, :inactive]

end
