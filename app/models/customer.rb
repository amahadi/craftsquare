# frozen_string_literal: true

class Customer < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User
  include HomemadeInstanceMethods::Customer

  has_many :addresses, dependent: :destroy

  accepts_nested_attributes_for :addresses
end
