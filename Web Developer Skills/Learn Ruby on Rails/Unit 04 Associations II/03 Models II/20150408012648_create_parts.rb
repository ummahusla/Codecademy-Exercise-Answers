class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.belongs_to :movie, index: true
      t.belongs_to :actor, index: true
      t.timestamps
    end
  end
end
