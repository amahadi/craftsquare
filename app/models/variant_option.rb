class VariantOption < ApplicationRecord
    belongs_to :variant

    acts_as_taggable_on :values
end
