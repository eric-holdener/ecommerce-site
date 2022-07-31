Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/products/category/:category', to: 'products#show_category'
  get '/products/product/:id', to: 'products#show_product'

  # Defines the root path route ("/")
  root 'pages#index'
end
