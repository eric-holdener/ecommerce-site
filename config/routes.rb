Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'products/index'
      get 'product/:id', to: 'products#show'
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "baseapp#index"
end
