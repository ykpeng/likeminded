Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :show, :create, :edit, :update]
    resource :session, only: [:create, :destroy]
    resources :profile_sections, only: [:update]
    resources :questions, only: [:index]
    resources :answers, only: [:index, :create, :update]
    resources :conversations, only: [:index, :show, :create, :destroy] do
      resources :messages, only: [:index, :create]
    end
  end
end
