require 'sinatra'
require 'sinatra/reloader'
also_reload 'lib/**/*.rb'
require 'sinatra/jsonp'
require './lib/parks'


configure do
  set :root, File.dirname(__FILE__)
  set :public_folder, 'public/app'
end

get '/' do
  File.read('public/app/index.html')
end

get '/parks' do
  JSONP parks()
end

get '/parks/:id' do
  id = params.fetch("id").to_i() - 1
  park = parks()
  JSONP park[id]
end