module CS
  module Validations
    module DeliveryDateTime

      extend ActiveSupport::Concern

      private

      def from_time_is_less_than_to_time
        return unless from_time.present? && to_time.present?
        if from_time >= to_time
          errors.add(
            :from_time,
            I18n.t('errors.model.delivery_date_time.validation.from_time_should_be_less_than_to_time')
          )
        end
      end
    end
  end
end