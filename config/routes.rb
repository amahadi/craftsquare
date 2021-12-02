Rails.application.routes.draw do
  mount_devise_token_auth_for 'Merchant', at: 'merchants'
  root to: "home#index"
end
