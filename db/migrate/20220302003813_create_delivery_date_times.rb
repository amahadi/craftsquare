class CreateDeliveryDateTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :delivery_date_times do |t|
      t.belongs_to :advert
      t.integer :weekday
      t.time :from_time
      t.time :to_time
      t.integer :delivery_type # pick_up_and_drop_off, pick_up, drop_off
      t.timestamps
    end
  end
end
