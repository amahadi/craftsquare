class Advert < ApplicationRecord

    belongs_to :shop
    belongs_to :product
    has_many :variant_configurations, dependent: :destroy

    accepts_nested_attributes_for :variant_configurations

    def selected_product
        product.attributes.merge!(
            {
                variants: selected_variants
            }
        )
    end

    def selected_variants
        variant_options = product.variants.includes(:variant_options)
            .flat_map { |v| v.variant_options }

        variant_configurations.includes(:variant).filter_map do |variant_configuration|
            variant = variant_configuration.variant
            if variant.present?
                options = variant_options.select { |variant_option|
                    variant_configuration.option_list.include?(variant_option.id.to_s)
                }
                variant = variant.attributes.merge!({
                    options: options
                })
                variant
            else
                nil
            end
        end
    end
end
