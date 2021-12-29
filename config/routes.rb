Rails.application.routes.draw do

  mount_devise_token_auth_for 'Merchant', at: 'auth/merchants'

  mount_devise_token_auth_for 'Customer', at: 'auth/customers'

  root to: 'home#index'

  get '/customer', to: 'customers#index'
  get '/customer/*path', to: 'customers#index'

  get '/merchant', to: 'merchants#index'
  get '/merchant/*path', to: 'merchants#index'

  get '/utilities/*path', to: 'utilities#index'

  # define all routes after this

  draw 'merchants/api_v1.rb'
  draw 'customers/api_v1.rb'
end
