Rails.application.routes.draw do
  root to: 'pages#home'
  get 'cv', to: 'pages#cv'
end
