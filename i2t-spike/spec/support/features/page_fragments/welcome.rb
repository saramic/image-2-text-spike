module PageFragments
  module Welcome
    def new_game
      browser.click_on('New Game')
    end

    def no_game
      browser.has_content?('no game')
    end
  end
end
