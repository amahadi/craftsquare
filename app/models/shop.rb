class Shop < ApplicationRecord
  belongs_to :merchant
  has_many :products

  acts_as_taggable_on :tags

end
