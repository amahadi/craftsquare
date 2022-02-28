class CreateNotifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.belongs_to :shop, optional: true
      t.belongs_to :customer, optional: true

      t.string :object_name
      t.integer :object_id
      t.string :event
      t.boolean :read, default: false
      t.timestamps

    end

    add_index :notifications, :object_name
    add_index :notifications, :object_id
  end
end
