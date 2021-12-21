Rails.application.routes.draw do

  mount_devise_token_auth_for 'Merchant', at: 'merchants'

  mount_devise_token_auth_for 'Customer', at: 'customers'

  root to: 'home#index'
  get '/home', to: 'home#index'
  get 'home/*path', to: 'home#index'

  # define all routes after this

  draw 'merchants/api_v1.rb'
  draw 'customers/api_v1.rb'
end
