# frozen_string_literal: true

class Merchant < ActiveRecord::Base

  has_many :shops


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  include HomemadeValidations::Merchant

  validates :email, presence:
    { message: I18n.t('errors.model.merchant.validation.presence.email') }, on: :create
  validates :password, presence:
    { message: I18n.t('errors.model.merchant.validation.presence.password') }, on: :create

  validate :first_name_has_valid_characters,
           :last_name_has_valid_characters ,
           on: :update
end
