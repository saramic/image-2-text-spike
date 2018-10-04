require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do
  it 'returns a  default index page' do
    get :index
  end
end
