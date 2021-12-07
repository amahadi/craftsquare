class Shop < ApplicationRecord
  belongs_to :merchant

  acts_as_taggable_on :tags

end
