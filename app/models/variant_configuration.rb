class VariantConfiguration < ApplicationRecord

    belongs_to :advert
    belongs_to :variant

    acts_as_taggable_on :options

    def selected_variants
        variant.attributes.merge!({
            options: selected_options
        })
    end

    def selected_options
        variant.variant_options.where(id: option_list)
    end
end
