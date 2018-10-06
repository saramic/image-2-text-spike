require 'rails_helper'

feature 'Michael plays a game of images 2 text', js: true do
  scenario 'Michael plays a perfect game' do
    When 'Michael lands on the page' do
      visit root_path
    end

    Then 'there are no games' do
      wait_for { focus_on(:welcome).no_game }.to be_truthy
    end
  end
end
