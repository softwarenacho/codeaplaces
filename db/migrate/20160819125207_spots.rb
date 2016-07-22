class Spots < ActiveRecord::Migration
  def change
  	create_table :spots do |t|
  		t.integer :spot
      t.integer	:student
      t.belongs_to :classroom
    end
  end
end
