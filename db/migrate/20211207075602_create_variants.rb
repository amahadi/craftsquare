class CreateVariants < ActiveRecord::Migration[6.1]
  def change
    create_table :variants do |t|
      t.belongs_to :product
      t.string :title
      t.text :description
      t.decimal :weight
      t.string :weight_unit
      t.integer :inventory_quantity
      t.decimal :price
      t.integer :status, default: 0 # active, deleted
      t.timestamps

      # taggable -- ingredients
      # taggable -- options
    end
  end
end
