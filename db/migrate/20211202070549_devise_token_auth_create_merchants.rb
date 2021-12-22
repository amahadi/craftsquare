class DeviseTokenAuthCreateMerchants < ActiveRecord::Migration[6.1]
  def change

    create_table(:merchants) do |t|
      ## Required
      t.string :provider, :null => false, :default => "email"
      t.string :uid, :null => false, :default => ""

      ## Database authenticatable
      t.string :encrypted_password, :null => false, :default => ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, :default => false

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## User Info
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :email

      # Determines if the merchant profile is complete
      # when all the necessary fields are filled, mark the profile as complete
      t.boolean :complete, default: false
      t.boolean :approved, default: false

      ## Tokens
      t.json :tokens

      t.timestamps
    end

    add_index :merchants, :email,                unique: true
    add_index :merchants, [:uid, :provider],     unique: true
    add_index :merchants, :reset_password_token, unique: true
    add_index :merchants, :confirmation_token,   unique: true
    # add_index :merchants, :unlock_token,         unique: true
  end
end
