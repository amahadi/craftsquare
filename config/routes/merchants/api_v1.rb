namespace :merchants do
  namespace :api do
    namespace :v1 do
      resources :merchants
      resources :shops do
        resources :products
        resources :adverts
      end
      resources :products, only: [] do
        resources :variants
      end
      resources :adverts, only: [] do
        resources :variant_configurations
      end
    end
  end
end