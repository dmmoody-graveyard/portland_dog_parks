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

get '/' do
  erb :index
end

get '/parks' do
  JSONP parks
end