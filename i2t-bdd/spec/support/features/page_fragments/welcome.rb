module PageFragments
  module Welcome
    def start_new_game
      browser.find('a', text: 'Start New Game').click
    end
  end
end
