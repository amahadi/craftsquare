class Product < ApplicationRecord
    belongs_to :shop

    acts_as_taggable_on :tags, :ingredients, :product_types 

    enum status: [:draft, :active, :inactive]
end
