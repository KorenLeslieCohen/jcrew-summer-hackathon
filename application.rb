require_relative 'config/environment'
require 'sinatra'

class Application < Sinatra::Base

  get '/' do

    @categories = {
    	:women_sweaters => JcrewCategory.new("Women's Sweaters", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/sweaters.jsp"),
    	:women_pants => JcrewCategory.new("Women's Pants", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/pants.jsp")
    }

    erb :"index.html"
  end

  # get '/about' do
  #   erb :"about.html"
  # end

end