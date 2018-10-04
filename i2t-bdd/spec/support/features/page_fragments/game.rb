module PageFragments
  module Game
    def title
      browser.find('h1').text
    end
  end
end
