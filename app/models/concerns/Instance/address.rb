module Instance
  module Address
    extend ActiveSupport::Concern

    def address_string
      [
        street,
        city,
        province,
        postal_code,
        country
      ].compact.join(', ')
    end
  end
end