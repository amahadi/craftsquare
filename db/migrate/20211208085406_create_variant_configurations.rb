class CreateVariantConfigurations < ActiveRecord::Migration[6.1]
  def change
    create_table :variant_configurations do |t|
      t.belongs_to :advert
      t.belongs_to :variant
      t.timestamps

      # taggable -- options
    end
  end
end
