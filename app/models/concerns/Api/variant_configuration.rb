module Api
  module VariantConfiguration
    extend ActiveSupport::Concern

    def selected_variants
      variant.attributes.merge!({
        options: selected_options
      })
    end

    def selected_options
      puts("OPTION LIST: #{option_list}")
      variant.variant_options.where(id: option_list)
    end
  end
end