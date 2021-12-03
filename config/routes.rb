Rails.application.routes.draw do
  mount_devise_token_auth_for 'Merchant', at: 'merchants'

  mount_devise_token_auth_for 'Customer', at: 'customers'
  as :customer do
    # Define routes for Customer within this block.
  end
  root to: "home#index"
end
