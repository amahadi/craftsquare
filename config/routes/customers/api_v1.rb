namespace :customers do
  namespace :api do
    namespace :v1 do
      resources :customers
      resources :adverts, only: [:index, :show]
    end
  end
end