require 'sinatra'
require 'sinatra/reloader'
also_reload 'lib/**/*.rb'
require 'sinatra/jsonp'

parks = [
  {
    City: "Beaverton"
  },
  {
    City: "Portland"
  }
]

configure do
  set :root, File.dirname(__FILE__)
  set :public_folder, 'public/app'
end

get '/' do
  File.read('public/app/index.html')
end

get '/parks' do
  JSONP parks
end