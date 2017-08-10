class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.string :release_year
      t.string :plot
      t.timestamps
    end
  end
end
