module CS
  module Validations
    module Merchant

      extend ActiveSupport::Concern

      private

      def first_name_has_valid_characters
        unless has_valid_name?(first_name)
          errors.add(:first_name, I18n.t('errors.model.merchant.validation.first_name_has_valid_characters'))
          # raise ActiveModel::ValidationError.new(self)
        end
      end

      def last_name_has_valid_characters
        unless has_valid_name?(last_name)
          errors.add(:last_name, I18n.t('errors.model.merchant.validation.last_name_has_valid_characters'))
          # raise ActiveModel::ValidationError.new(self)
        end
      end

      def has_valid_name?(name)
        return true unless name.present?
        (name =~ /\A[^0-9`!@#\$%\^&*+_=]+\z/).present?
      end

      def over_valid_age_limit
        return unless date_of_birth.present?
        unless age >= 16
          errors.add(:date_of_birth, I18n.t('errors.model.merchant.validation.over_valid_age_limit'))
          # raise ActiveModel::ValidationError.new(self)
        end
      end

      def age
        return 0 unless date_of_birth.present?
        begin
          ((Date.today - date_of_birth).to_i / 365.25).to_i
        rescue => exception
          return 0
        end
      end
    end
  end
end