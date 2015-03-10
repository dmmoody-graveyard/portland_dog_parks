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

get '/parks.json' do
  JSONP parks()
end