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
      t.timestamps

      # taggable -- ingredients
    end
  end
end
