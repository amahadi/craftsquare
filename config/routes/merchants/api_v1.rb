namespace :merchants do
  namespace :api do
    namespace :v1 do
      resources :shops do
        resources :products
        resources :adverts
      end
      resources :products, only: [] do
        resources :variants
      end
    end
  end
end