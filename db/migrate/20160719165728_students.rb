class Students < ActiveRecord::Migration
  def change
  	create_table :students do |t|
      t.integer :codea_id
      t.string :name
      t.string :mode
      t.integer :fase
      t.string :init_date
    end
  end
end