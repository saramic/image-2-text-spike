require 'rails_helper'

feature 'Michael plays a game of images 2 text' do
  scenario 'Michael plays a perfect game' do
    When 'Michael starts a new game' do
      visit root_path
      focus_on(:welcome).start_new_game
    end

    Then 'a new game is anounced' do
      pending 'need a way to start the game'

      wait_for { focus_on(:game).title }.to eq('Game Ready')
    end
  end
end
