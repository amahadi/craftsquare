namespace :merchants do
    get '/sign-in', to: 'home#index'
    get '/sign-up', to: 'home#index'
    # Merchant home
    get '/', to: 'home#index'
    get '/dashboard', to: 'home#index'
    get '/shops', to: 'home#index'
    get '/shops/new', to: 'home#index'
    get '/shops/:id', to: 'home#index'

    # Shop dashboard
    get '/shops/:id/*path', to: 'shops#show'
end