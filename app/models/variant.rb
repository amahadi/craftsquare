class Variant < ApplicationRecord
    belongs_to :product

    acts_as_taggable_on :ingredients
end
