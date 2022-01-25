class CreateVariantOptions < ActiveRecord::Migration[6.1]
  def change
    create_table :variant_options do |t|
      t.belongs_to :variant
      t.string :title
      t.integer :status, default: 0 # active, deleted
      # taggable -- values
      t.timestamps
    end
  end
end
