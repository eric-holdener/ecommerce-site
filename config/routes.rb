Rails.application.routes.draw do
  resources :discounts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  scope 'api/v1' do
    get '/products/category/:category', to: 'products#get_category'
    get '/products/product/:id', to: 'products#get_product'
    get '/products/categories', to: 'products#all_categories'
    get '/orders/order/:id', to: 'orders#get_order'
    post 'orders/create', to: 'orders#create'
  end

  # Defines the root path route ("/")
  root 'pages#index'
  get '*path', to: 'pages#index'
end
