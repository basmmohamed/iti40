Rails.application.routes.draw do
  resources :comments
  get 'users/index'
  get 'users/show'
  get 'users/new'
  post 'users/create'
  put 'users/update'
  get 'users/edit'
  delete 'users/destroy'
  post 'posts/:id/comment', to: 'comments#create' ,:as => :post_comments
  get 'posts/:id/comment', to: 'comments#list' ,:as => :postcomments

  # get 'users/name:string'
  resources :posts
  root to: 'posts#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
