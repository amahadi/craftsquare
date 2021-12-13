module Customers
  module Api
    module V1
      module Adverts
        extend ActiveSupport::Concern

        def adverts
          Advert.search_within(location, distance)
        end

        def location
          return params[:location].present? ? params[:location] : current_address_location
        end

        def current_address_location
          current_address = current_customer.current_address
          return [
            current_address.latitude,
            current_address.longitude
          ]
        end

        def distance
          return params[:distance].present? ? params[:distance] : 50
        end

      end
    end
  end
end