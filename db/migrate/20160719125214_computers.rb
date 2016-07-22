class Computers < ActiveRecord::Migration
  def change
  	create_table :computers do |t|
      t.belongs_to :spot
    end
  end
end
