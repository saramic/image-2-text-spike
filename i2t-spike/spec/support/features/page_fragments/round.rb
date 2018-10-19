module PageFragments
  module Round
    def number
      browser.find('.round').text()
    end

    def images
      browser.find_all('.image')
    end

    def guess_box_enabled?
      browser.has_css?('.guess-box:enabled')
    end

    def guess_box_disabled?
      browser.has_css?('.guess-box:disabled')
    end

    def enter_guess(guess)
      browser.find('.guess-box').fill_in(with: guess)
    end

    def status
      browser.find('.status').text()
    end

    def score
      browser.find('.score').text()
    end
  end
end
