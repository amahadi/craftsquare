class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.belongs_to :shop
      t.string :title
      t.string :description
      t.integer :status, default: 0 # draft, active, inactive, deleted
      t.datetime :published_at
      t.timestamps

      # relations -- images, options, variants
      # taggable -- options[:values], product_type, tags, ingredients
    end
  end
end
