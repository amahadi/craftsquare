class CreateShops < ActiveRecord::Migration[6.1]
  def change
    create_table :shops do |t|
      t.belongs_to :merchant

      t.string :name

      # address and location
      t.string :street_number
      t.string :street_name
      t.string :apartment_number
      t.string :suite_number
      t.string :postal_code
      t.string :city
      t.string :province
      t.string :country
      t.string :country_code
      t.decimal :latitude
      t.decimal :longitude

      # preferences
      t.string :currency
      t.string :language
      t.string :timezone
      t.timestamps
    end
  end
end
