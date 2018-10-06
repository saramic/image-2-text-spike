module PageFragments
  module Welcome
    def no_game
      browser.has_content?('no game')
    end
  end
end
