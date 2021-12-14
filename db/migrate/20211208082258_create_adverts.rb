class CreateAdverts < ActiveRecord::Migration[6.1]
  def change
    create_table :adverts do |t|
      t.belongs_to :shop
      t.belongs_to :product
      t.string :title
      t.text :description
      t.datetime :start_date
      t.datetime :end_date
      t.integer :status, default: 0 # draft, active, inactive
      t.integer :delivery_method, default: 0 # all, pick_up_only, drop_off_only
      t.jsonb :pick_up_times
      t.jsonb :drop_off_times
      t.text :note
      t.timestamps

      # taggable -- variants
      # taggable -- options
    end
  end
end
