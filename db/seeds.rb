# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

amanda = User.create!({
  username: "amandasmith",
  password: "password",
  email: "amandasmith@gmail.com",
  zipcode: 94609,
  birthday: Date.new(1990, 1, 19),
  looking_for: "Friendship",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486122/photo-1441123100240-f9f3f77ed41b_d2evmb.jpg"
  })

john = User.create!({
  username: "johnmichael",
  password: "password",
  email: "johnmichael@gmail.com",
  zipcode: 94609,
  birthday: Date.new(1980, 8, 2),
  looking_for: "Collaboration",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486108/photo-1429114753120-0733a750d6c1_rwbn7m.jpg"
  })

samantha = User.create!({
  username: "samanthajones",
  password: "password",
  email: "samanthajones@gmail.com",
  zipcode: 10001,
  birthday: Date.new(1989, 4, 26),
  looking_for: "Collaboration",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486129/photo-1428931996691-a5108d4cdbf5_srelp9.jpg"
  })

jenny = User.create!({
  username: "jenuinely",
  password: "password",
  email: "jenuinely@hotmail.com",
  zipcode: 10001,
  birthday: Date.new(1988, 11, 26),
  looking_for: "Collaboration",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486102/photo-1414202251636-d05ac44c0182_oprdkl.jpg"
  })

trevor = User.create!({
  username: "trevorjohnson",
  password: "password",
  email: "trevorjohnson@hotmail.com",
  zipcode: 10001,
  birthday: Date.new(1988, 4, 23),
  looking_for: "Friendship",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486123/photo-1429594801156-2c53a0d4f96e_nly3j6.jpg"
  })

elijah = User.create!({
  username: "elijahallen",
  password: "password",
  email: "elijahallen@gmail.com",
  zipcode: 10001,
  birthday: Date.new(1931, 12, 1),
  looking_for: "Friendship",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486125/photo-1431225188438-8504262c0b0b_k0umkc.jpg"
  })

steve = User.create!({
  username: "stevecollins",
  password: "password",
  email: "stevecollins@hotmail.com",
  zipcode: 94101,
  birthday: Date.new(1984, 5, 14),
  looking_for: "Friendship",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486112/9nfsYstTyWEJKScHr3MV_IMG_6450_ngnfeo.jpg"
  })

miranda = User.create!({
  username: "mirandameyers",
  password: "password",
  email: "mirandameyers@hotmail.com",
  zipcode: 94101,
  birthday: Date.new(1989, 7, 6),
  looking_for: "Friendship",
  img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467486111/photo-1428395037018-2cca71ba2f50_ne97or.jpg"
  })

SECTIONS = ["self summary", "doing with life", "good at", "favorites", "thinking about", "friday night", "message if"]

User.all.each do |user|
  SECTIONS.each do |section|
    ProfileSection.create!({ user_id: user.id, section: section, content: ""})
  end
end

dimensions = ["Realistic", "Investigative", "Artistic", "Social", "Enterprising", "Conventional"]

dimensions.each do |dimension|
  Dimension.create!({ name: dimension })
end

#Section 1
Question.create!({
  dimension_id: 0,
  content: "Build kitchen cabinets"
  })

Question.create!({
  dimension_id: 0,
  content: "Lay brick or tile"
  })

Question.create!({
  dimension_id: 1,
  content: "Develop a new medicine"
  })

Question.create!({
  dimension_id: 1,
  content: "Study ways to reduce water pollution"
  })

Question.create!({
  dimension_id: 2,
  content: "Write books or plays"
  })

Question.create!({
  dimension_id: 2,
  content: "Play a musical instrument"
  })

Question.create!({
  dimension_id: 3,
  content: "Teach an individual an exercise routine"
  })

Question.create!({
  dimension_id: 3,
  content: "Help people with personal or emotional problems"
  })

Question.create!({
  dimension_id: 4,
  content: "Buy and sell stocks and bonds"
  })

Question.create!({
  dimension_id: 4,
  content: "Manage a retail store"
  })

Question.create!({
  dimension_id: 5,
  content: "Develop a spreadsheet using computer software"
  })

Question.create!({
  dimension_id: 5,
  content: "Proofread records or forms"
  })

#Section 2
Question.create!({
  dimension_id: 0,
  content: "Repair household appliances"
  })

Question.create!({
  dimension_id: 0,
  content: "Raise fish in a fish hatchery"
  })

Question.create!({
  dimension_id: 1,
  content: "Conduct chemical experiments"
  })

Question.create!({
  dimension_id: 1,
  content: "Study the movement of planets"
  })

Question.create!({
  dimension_id: 2,
  content: "Compose or arrange music"
  })

Question.create!({
  dimension_id: 2,
  content: "Draw pictures"
  })

Question.create!({
  dimension_id: 3,
  content: "Give career guidance to people"
  })

Question.create!({
  dimension_id: 3,
  content: "perform rehabilitation therapy"
  })

Question.create!({
  dimension_id: 4,
  content: "Operate a beauty salon or barber shop"
  })

Question.create!({
  dimension_id: 4,
  content: "Manage a department within a large company"
  })

Question.create!({
  dimension_id: 5,
  content: "Install software across computers on a large network"
  })

Question.create!({
  dimension_id: 5,
  content: "Operate a calculator"
  })

#Section 3
Question.create!({
  dimension_id: 0,
  content: "Assemble electronic parts"
  })

Question.create!({
  dimension_id: 0,
  content: "Drive a truck to deliver packages to offices and homes"
  })

Question.create!({
  dimension_id: 1,
  content: "Examine blood samples using a microscope"
  })

Question.create!({
  dimension_id: 1,
  content: "Investigate the cause of a fire"
  })

Question.create!({
  dimension_id: 2,
  content: "Create special effects for movies"
  })

Question.create!({
  dimension_id: 2,
  content: "Paint sets for plays"
  })

Question.create!({
  dimension_id: 3,
  content: "Do volunteer work at a non-profit organization"
  })

Question.create!({
  dimension_id: 3,
  content: "Teach children how to play sports"
  })

Question.create!({
  dimension_id: 4,
  content: "Start your own business"
  })

Question.create!({
  dimension_id: 4,
  content: "Negotiate business contracts"
  })

Question.create!({
  dimension_id: 5,
  content: "Keep shipping and receiving records"
  })

Question.create!({
  dimension_id: 5,
  content: "Calculate the wages of employees"
  })

#Section 4
Question.create!({
  dimension_id: 0,
  content: "Test the quality of parts before shipment"
  })

Question.create!({
  dimension_id: 0,
  content: "Repair and install locks"
  })

Question.create!({
  dimension_id: 1,
  content: "Develop a way to better predict the weather"
  })

Question.create!({
  dimension_id: 1,
  content: "Work in a biology lab"
  })

Question.create!({
  dimension_id: 2,
  content: "Write scripts for movies or television shows"
  })

Question.create!({
  dimension_id: 2,
  content: "Perform jazz or tap dance"
  })

Question.create!({
  dimension_id: 3,
  content: "Teach sign language to people with hearing disabilities"
  })

Question.create!({
  dimension_id: 3,
  content: "Help conduct a group therapy session"
  })

Question.create!({
  dimension_id: 4,
  content: "Represent a client in a lawsuit"
  })

Question.create!({
  dimension_id: 4,
  content: "Market a new line of clothing"
  })

Question.create!({
  dimension_id: 5,
  content: "Inventory supplies using a hand-held computer"
  })

Question.create!({
  dimension_id: 5,
  content: "Record rent payments"
  })

#Section 5
Question.create!({
  dimension_id: 0,
  content: "Set up and operate machines to make products"
  })

Question.create!({
  dimension_id: 0,
  content: "Put out forest fires"
  })

Question.create!({
  dimension_id: 1,
  content: "Invent a replacement for sugar"
  })

Question.create!({
  dimension_id: 1,
  content: "Do laboratory tests to identity diseases"
  })

Question.create!({
  dimension_id: 2,
  content: "Sing in a band"
  })

Question.create!({
  dimension_id: 2,
  content: "Edit movies"
  })

Question.create!({
  dimension_id: 3,
  content: "Take care of children at a day-care center"
  })

Question.create!({
  dimension_id: 3,
  content: "Teach a high-school class"
  })

Question.create!({
  dimension_id: 4,
  content: "Sell merchandise at a department store"
  })

Question.create!({
  dimension_id: 4,
  content: "Manage a clothing store"
  })

Question.create!({
  dimension_id: 5,
  content: "Keep inventory records"
  })

Question.create!({
  dimension_id: 5,
  content: "Stamp, sort, and distribute mail for an organization"
  })

User.all.each do |user|
  Question.all.each do |question|
    Answer.create!({ user_id: user.id, question_id: question.id, answer_choice: 0 })
  end
end
