require_relative 'config/environment'
require 'sinatra'

class Application < Sinatra::Base

  get '/' do

    @categories = {
      :women_sweaters => JcrewCategory.new("Women's Sweaters", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/sweaters.jsp"),
      :women_knits => JcrewCategory.new("Women's Knits", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/knitstees.jsp"),
      :women_tops => JcrewCategory.new("Women's Tops", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/shirtsandtops2.jsp"),
      :women_pants => JcrewCategory.new("Women's Pants", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/pants.jsp"),
      :women_skirts => JcrewCategory.new("Women's Skirts", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/skirts.jsp"),
      :women_denim => JcrewCategory.new("Women's Denim", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/denim.jsp"),
      :men_shirts => JcrewCategory.new("Men's Shirts", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/shirts.jsp"),
      :men_sweaters => JcrewCategory.new("Men's Sweaters", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/sweaters.jsp"),
      :men_tees => JcrewCategory.new("Men's Tees", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/mens_category/teespolos2.jsp"),
      :men_denim => JcrewCategory.new("Men's Denim", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/pants/denimandcord.jsp"),
      :men_chinos => JcrewCategory.new("Men's Chinos", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/pants/brokeninchinos.jsp"),
      :men_shorts => JcrewCategory.new("Men's Shorts", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/mens_category/shorts.jsp")
    }

    # @women_sweaters = JcrewCategory.new("Women's Sweaters", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/sweaters.jsp")
    # @women_knits = JcrewCategory.new("Women's Knits", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/knitstees.jsp")
    # @women_tops = JcrewCategory.new("Women's Tops", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/shirtsandtops2.jsp")
    # @women_pants = JcrewCategory.new("Women's Pants", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/pants.jsp")
    # @women_skirts = JcrewCategory.new("Women's Skirts", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/womens_category/skirts.jsp")
    # @women_denim = JcrewCategory.new("Women's Denim", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/womens_category/denim.jsp")
    # @men_shirts = JcrewCategory.new("Men's Shirts", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/shirts.jsp")
    # @men_sweaters = JcrewCategory.new("Men's Sweaters", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/sweaters.jsp")
    # @men_tees = JcrewCategory.new("Men's Tees", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/mens_category/teespolos2.jsp")
    # @men_denim = JcrewCategory.new("Men's Denim", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/pants/denimandcord.jsp")
    # @men_chinos = JcrewCategory.new("Men's Chinos", ".arrayImg", ".arrayImg a", "https://www.jcrew.com/mens_category/pants/brokeninchinos.jsp")
    # @men_shorts = JcrewCategory.new("Men's Shorts", ".plus_image_container", ".plus_image_container a", "https://www.jcrew.com/mens_category/shorts.jsp")
    
    erb :"index.html"
  end

  # get '/about' do
  #   erb :"about.html"
  # end

end