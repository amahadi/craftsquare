module Instance
  module Shop
    extend ActiveSupport::Concern

    def address
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