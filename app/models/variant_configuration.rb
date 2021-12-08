class VariantConfiguration < ApplicationRecord
    belongs_to :advert
    belongs_to :variant

    acts_as_taggable_on :options
end
