module HomemadeClassMethods
  module Advert
    extend ActiveSupport::Concern
    class_methods do

      def search_within(location, distance) # params: location=>[], distance=>integer in km
        nearby_shop_ids = Shop.near(location, distance, unit: :km).map { |shop| shop.id }
        adverts = where(shop_id: nearby_shop_ids).active
      end

    end
  end
end