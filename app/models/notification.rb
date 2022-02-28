class Notification < ApplicationRecord
  belongs_to :shop, optional: true
  belongs_to :customer, optional: true
end
