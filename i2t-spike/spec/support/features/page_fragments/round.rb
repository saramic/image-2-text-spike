module PageFragments
  module Round
    def number
      browser.find('.round').text()
    end

    def images
      browser.find_all('.image')
    end
  end
end
