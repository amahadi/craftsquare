class VariantOption < ApplicationRecord
    belongs_to :variant

    acts_as_taggable_on :values

    enum status: [:active, :deleted]
end
