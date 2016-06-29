Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :show, :create, :edit, :update]
    resource :session, only: [:create, :destroy]
  end
end
