class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.belongs_to :customer

      t.string :street
      t.string :apartment_number
      t.string :suite_number
      t.string :city
      t.string :province
      t.string :postal_code
      t.string :country

      t.decimal :latitude
      t.decimal :longitude

      t.boolean :current, default: false
      t.timestamps
    end
  end
end
