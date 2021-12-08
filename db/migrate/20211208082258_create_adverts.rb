class CreateAdverts < ActiveRecord::Migration[6.1]
  def change
    create_table :adverts do |t|
      t.belongs_to :shop
      t.belongs_to :product
      t.string :title
      t.text :description
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps

      # taggable -- variants
      # taggable -- options
    end
  end
end
