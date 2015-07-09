require 'nokogiri'
require 'rubygems'
require 'open-uri'
require 'cgi'
require 'uri'

class JcrewCategory

  attr_accessor :name, :links_post, :images_post, :url, :all_prod_links, :all_image_links, :product_links, :src_jpg_links

  def initialize(name, links_post, images_post, url)
    @name = name
    @links_post = links_post
    @images_post = images_post
    @url = url
    @all_prod_links = []
    @product_links = []
    @all_image_links = []
    @src_jpg_links = []
  end

  # product links
  def get_links
    doc = Nokogiri::HTML(open(url))
    to_scrape = doc.css(links_post)
    prod_links = to_scrape.xpath('a')
    all_prod_links << prod_links.map {|link| link["href"]}.compact
    all_prod_links.each do |inner_array|
      inner_array.each do |link|
        product_links << link 
      end
    end
    if product_links.count > 5
      product_links[0..4]
    else
      product_links
    end
  end

  # image links
  def get_links_img
    doc = Nokogiri::HTML(open(url))
    to_scrape = doc.css(images_post)
    image_links = to_scrape.xpath('img')
    all_image_links << image_links.map {|link| link["src"]}.compact
    all_image_links.each do |inner_array|
      inner_array.each do |link|
        src_jpg_links << link 
      end
    end
    if src_jpg_links.count > 5
      src_jpg_links[0..4]
    else
      src_jpg_links
    end
  end

end