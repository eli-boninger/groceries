# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

group1 = UserGroup.find_or_create_by!(name: "Multiple User Group")
group2 = UserGroup.find_or_create_by!(name: "Single User Group")
user1 = User.find_or_create_by!(email_address: "user1@test.com") do |user|
  user.password = 'Pas$w0rd'
  user.password_confirmation = 'Pas$w0rd'
end
user2 = User.find_or_create_by!(email_address: "user2@test.com") do |user|
  user.password = 'Pas$w0rd'
  user.password_confirmation = 'Pas$w0rd'
end
user3 = User.find_or_create_by!(email_address: "user3@test.com") do |user|
  user.password = 'Pas$w0rd'
  user.password_confirmation = 'Pas$w0rd'
end
user4 = User.find_or_create_by!(email_address: "user4@test.com") do |user|
  user.password = 'Pas$w0rd'
  user.password_confirmation = 'Pas$w0rd'
end

group1.users = [ user1, user2, user3 ]
group2.users = [ user4 ]
group1.owner_id = user1.id
group2.owner_id = user4.id
group1.save
group2.save

list1 = List.find_or_create_by!(name: "List 1") do |list|
  list.user_group = group1
end

list1.save

list2 = List.find_or_create_by!(name: "List 2") do |list|
  list.user_group = group1
end

list2.save

list3 = List.find_or_create_by!(name: "List 3") do |list|
  list.user_group = group2
end

list3.save
