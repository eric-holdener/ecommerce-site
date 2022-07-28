Rails.application.routes.draw do
  resources :ratings
  resources :products
  resources :orders
  resources :discounts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
