class CreateTerms < ActiveRecord::Migration[5.2]
  class TermModel < ActiveRecord::Base
    self.table_name = "terms"
  end

  def change
    create_table :terms, id: :uuid do |t|
      t.string :term

      t.timestamps
    end

    TermModel.new(term: 'beaver').save
    TermModel.new(term: 'banana').save
    TermModel.new(term: 'badger').save
  end
end
