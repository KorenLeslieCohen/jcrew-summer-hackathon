require 'nokogiri'
require 'rubygems'
require 'open-uri'
require 'cgi'
require 'uri'

class JcrewCategory

  attr_accessor :name, :post, :url, :image_links, :all_image_links, :jpg_links, :src_jpg_links, :facebook, :twitter, :instagram, :function

  ALL_PRODUCTS = []

  def initialize(name, post, url, function=nil)
    @name = name
    @post = post
    @url = url
    # @facebook = facebook
    # @twitter = twitter
    # @instagram = instagram
    @image_links = []
    @all_image_links = []
    # @jpg_links = []
    @src_jpg_links = []
    if function == "get_links"
      @function = get_links
    elsif function == "get_links_img"
      @function = get_links_img
    end
    ALL_PRODUCTS << self
  end

  # a href images
  # def get_links
  #   doc = Nokogiri::HTML(open(url))
  #   to_scrape = doc.css(post)
  #   image_links = to_scrape.xpath('a')
  #   all_image_links << image_links.map {|link| link["href"]}.compact
  #   all_image_links.each do |inner_array|
  #     inner_array.each do |link|
  #       jpg_links << link if link.include?(".jpg")
  #       jpg_links << link if link.include?(".jpeg")
  #       jpg_links << link if link.include?(".JPG")
  #       jpg_links << link if link.include?(".JPEG")
  #     end
  #   end
  #   if jpg_links.count > 15
  #     jpg_links[0..14]
  #   else
  #     jpg_links
  #   end
  # end

  # img src images
  def get_links_img
    doc = Nokogiri::HTML(open(url))
    to_scrape = doc.css(post)
    image_links = to_scrape.xpath('img')
    all_image_links << image_links.map {|link| link["src"]}.compact
    all_image_links.each do |inner_array|
      inner_array.each do |link|
        src_jpg_links << link 
      end
    end
    if src_jpg_links.count > 15
      src_jpg_links[0..14]
    else
      src_jpg_links
    end
    # src_jpg_links
  end

  # def self.all_blogs
  #   ALL_PRODUCTS
  # end

end