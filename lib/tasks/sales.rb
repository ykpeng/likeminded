desc 'Update the Scores materialized view'
task :update_scores => :environment do
  Scores.refresh
end
