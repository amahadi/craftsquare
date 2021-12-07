namespace :merchants do
  namespace :api do
    namespace :v1 do
      resources :shops do
        resources :products
      end
    end
  end
end