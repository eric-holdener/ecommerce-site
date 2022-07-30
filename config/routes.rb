Rails.application.routes.draw do
  get 'pages/index'
  namespace :api do
    namespace :v1 do
      get 'products/index'
      get 'product/:id', to: 'products#show'
    end
  end

  get 'app', to: 'base_app#index'
  get 'app/*path', to: 'base_app#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "pages#index"
end
