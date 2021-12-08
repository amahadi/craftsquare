class Shop < ApplicationRecord
  belongs_to :merchant
  has_many :products
  has_many :adverts

  acts_as_taggable_on :tags

end
