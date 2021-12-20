module HomemadeValidations
  module Merchant
    extend ActiveSupport::Concern

    private

    def first_name_has_valid_characters
      unless has_valid_name?(first_name)
        errors.add(:base, I18n.t('errors.model.merchant.validation.first_name_has_valid_characters'))
      end
    end

    def last_name_has_valid_characters
      unless has_valid_name?(last_name)
        errors.add(:base, I18n.t('errors.model.merchant.validation.last_name_has_valid_characters'))
      end
    end

    def has_valid_name?(name)
      return true unless name.present?
      (name =~ /\A[^0-9`!@#\$%\^&*+_=]+\z/).present?
    end

  end
end