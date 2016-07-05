# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

young_urls = ["http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486122/photo-1441123100240-f9f3f77ed41b_d2evmb.jpg",
  "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486108/photo-1429114753120-0733a750d6c1_rwbn7m.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486129/photo-1428931996691-a5108d4cdbf5_srelp9.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486102/photo-1414202251636-d05ac44c0182_oprdkl.jpg",
  "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486123/photo-1429594801156-2c53a0d4f96e_nly3j6.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486125/photo-1431225188438-8504262c0b0b_k0umkc.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486112/9nfsYstTyWEJKScHr3MV_IMG_6450_ngnfeo.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486111/photo-1428395037018-2cca71ba2f50_ne97or.jpg",
  "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486125/photo-1431727460781-fa165e66bffa_zevc6p.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486122/photo-1430390456011-25ac9244999c_qnehnb.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486116/photo-1422568374078-27d3842ba676_lkp5yn.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467486105/girl-flowers_o0hdhr.jpg",
  "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700808/photo-1463430144406-394c977562d7_y5ma6i.jpg","http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700809/photo-1462907715766-a2863567b2a4_ccwiy2.jpg","http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700803/photo-1457727123450-0a8ed4777e77_tot9se.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700810/photo-1457084910899-f31c1f002ea1_eswzay.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700803/photo-1457084055477-1c04fec1ca1c_nbpami.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700798/photo-1455596120412-30a2e6c8e600_e4jszf.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700797/photo-1455504490126-80ed4d83b3b9_mdhnwy.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700813/photo-1455354269813-737d9df115bb_ymgcsn.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700791/photo-1454873447885-cf1b26ac02e7_cnq8ba.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700793/photo-1452547813764-66d7616f3f2e_x6zpsd.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700793/photo-1452472742148-67750ca2523c_leyanc.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700785/photo-1451650645557-62193a7bed6a_ligczf.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700811/photo-1449674836064-31362349a0fe_wnulge.jpg","http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700778/photo-1449247526693-aa049327be54_tsxuon.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700784/photo-1449245103163-86222bcd1f03_xhu06i.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700777/photo-1447789624106-34acdd381c18_yl0qsl.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700771/photo-1446511437394-36cdff3ae1b3_z8p8wz.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700769/photo-1445404590072-16ef9c18bd83_bizijx.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700795/photo-1445384153502-5b921b006ee2_pbmimu.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700774/photo-1445295029071-5151176738d0_wytzza.jpg","http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700768/photo-1444762030745-65ea18a65164_bwqrkn.jpg","http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700769/photo-1444068700300-d6ef2904d5e4_slzyjr.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700758/photo-1443180236447-432ea00e6ead_h9gbw5.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700757/photo-1442328166075-47fe7153c128_zdroxo.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700750/photo-1441731630438-264c7fe00bca_rp7jpd.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700740/photo-1437623889155-075d40e2e59f_ujypg5.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700747/photo-1436831135709-48bdc150cce5_fhisrv.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700735/photo-1436363271110-9de4ee5dcc6e_usqwz8.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700732/photo-1434510423563-c7e99bbc5bbd_x7u9vv.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700723/photo-1429277005502-eed8e872fe52_fyovss.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700723/photo-1429260350537-7db124ce78ac_jpvrym.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700692/photo-1419312520378-cbd583837112_ny3pw8.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700684/photo-1415769663272-8504c6cc02b3_c4dhrj.jpg"]

old_urls = ["http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700804/photo-1457393568996-e452740c8346_vuoawe.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700778/photo-1445127891637-6884935d9a02_f4zxsy.jpg", "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700691/photo-1422015347944-9dd46d16bd0b_dtl92r.jpg" ]

demo = User.create!({
        username: "samanthajones",
        password: "password",
        email: Faker::Internet.email,
        zipcode: 94609,
        birthday: Faker::Date.between(40.years.ago, 20.years.ago),
        looking_for: ["Friendship", "Collaboration"].sample,
        img_url: "http://res.cloudinary.com/ddm1q6utc/image/upload/c_scale,w_600/v1467700747/photo-1438761681033-6461ffad8d80_bqbh5d.jpg"
        })

young_urls.each do |young_url|
  User.create!({
    username: Faker::Internet.user_name,
    password: Faker::Internet.password,
    email: Faker::Internet.email,
    zipcode: Faker::Address.zip_code.to_i,
    birthday: Faker::Date.between(40.years.ago, 20.years.ago),
    looking_for: ["Friendship", "Collaboration"].sample,
    img_url: young_url
    })
end


old_urls.each do |old_url|
  User.create!({
    username: Faker::Internet.user_name,
    password: Faker::Internet.password,
    email: Faker::Internet.email,
    zipcode: Faker::Address.zip_code.to_i,
    birthday: Faker::Date.between(60.years.ago, 40.years.ago),
    looking_for: ["Friendship", "Collaboration"].sample,
    img_url: old_url
    })
end

SECTIONS = ["self summary", "doing with life", "good at", "favorites", "thinking about", "friday night", "message if"]

User.all.each do |user|
  SECTIONS.each do |section|
    ProfileSection.create!({ user_id: user.id, section: section, content: Faker::Hipster.paragraph})
  end
end

DIMENSIONS = ["Realistic", "Investigative", "Artistic", "Social", "Enterprising", "Conventional"]

DIMENSIONS.each do |dimension|
  Dimension.create!({ name: dimension })
end

#Section 1
Question.create!({
  dimension_id: 1,
  content: "Build kitchen cabinets"
  })

Question.create!({
  dimension_id: 1,
  content: "Lay brick or tile"
  })

Question.create!({
  dimension_id: 2,
  content: "Develop a new medicine"
  })

Question.create!({
  dimension_id: 2,
  content: "Study ways to reduce water pollution"
  })

Question.create!({
  dimension_id: 3,
  content: "Write books or plays"
  })

Question.create!({
  dimension_id: 3,
  content: "Play a musical instrument"
  })

Question.create!({
  dimension_id: 4,
  content: "Teach an individual an exercise routine"
  })

Question.create!({
  dimension_id: 4,
  content: "Help people with personal or emotional problems"
  })

Question.create!({
  dimension_id: 5,
  content: "Buy and sell stocks and bonds"
  })

Question.create!({
  dimension_id: 5,
  content: "Manage a retail store"
  })

Question.create!({
  dimension_id: 6,
  content: "Develop a spreadsheet using computer software"
  })

Question.create!({
  dimension_id: 6,
  content: "Proofread records or forms"
  })

#Section 3
Question.create!({
  dimension_id: 1,
  content: "Repair household appliances"
  })

Question.create!({
  dimension_id: 1,
  content: "Raise fish in a fish hatchery"
  })

Question.create!({
  dimension_id: 2,
  content: "Conduct chemical experiments"
  })

Question.create!({
  dimension_id: 2,
  content: "Study the movement of planets"
  })

Question.create!({
  dimension_id: 3,
  content: "Compose or arrange music"
  })

Question.create!({
  dimension_id: 3,
  content: "Draw pictures"
  })

Question.create!({
  dimension_id: 4,
  content: "Give career guidance to people"
  })

Question.create!({
  dimension_id: 4,
  content: "perform rehabilitation therapy"
  })

Question.create!({
  dimension_id: 5,
  content: "Operate a beauty salon or barber shop"
  })

Question.create!({
  dimension_id: 5,
  content: "Manage a department within a large company"
  })

Question.create!({
  dimension_id: 6,
  content: "Install software across computers on a large network"
  })

Question.create!({
  dimension_id: 6,
  content: "Operate a calculator"
  })

#Section 4
Question.create!({
  dimension_id: 1,
  content: "Assemble electronic parts"
  })

Question.create!({
  dimension_id: 1,
  content: "Drive a truck to deliver packages to offices and homes"
  })

Question.create!({
  dimension_id: 2,
  content: "Examine blood samples using a microscope"
  })

Question.create!({
  dimension_id: 2,
  content: "Investigate the cause of a fire"
  })

Question.create!({
  dimension_id: 3,
  content: "Create special effects for movies"
  })

Question.create!({
  dimension_id: 3,
  content: "Paint sets for plays"
  })

Question.create!({
  dimension_id: 4,
  content: "Do volunteer work at a non-profit organization"
  })

Question.create!({
  dimension_id: 4,
  content: "Teach children how to play sports"
  })

Question.create!({
  dimension_id: 5,
  content: "Start your own business"
  })

Question.create!({
  dimension_id: 5,
  content: "Negotiate business contracts"
  })

Question.create!({
  dimension_id: 6,
  content: "Keep shipping and receiving records"
  })

Question.create!({
  dimension_id: 6,
  content: "Calculate the wages of employees"
  })

#Section 5
Question.create!({
  dimension_id: 1,
  content: "Test the quality of parts before shipment"
  })

Question.create!({
  dimension_id: 1,
  content: "Repair and install locks"
  })

Question.create!({
  dimension_id: 2,
  content: "Develop a way to better predict the weather"
  })

Question.create!({
  dimension_id: 2,
  content: "Work in a biology lab"
  })

Question.create!({
  dimension_id: 3,
  content: "Write scripts for movies or television shows"
  })

Question.create!({
  dimension_id: 3,
  content: "Perform jazz or tap dance"
  })

Question.create!({
  dimension_id: 4,
  content: "Teach sign language to people with hearing disabilities"
  })

Question.create!({
  dimension_id: 4,
  content: "Help conduct a group therapy session"
  })

Question.create!({
  dimension_id: 5,
  content: "Represent a client in a lawsuit"
  })

Question.create!({
  dimension_id: 5,
  content: "Market a new line of clothing"
  })

Question.create!({
  dimension_id: 6,
  content: "Inventory supplies using a hand-held computer"
  })

Question.create!({
  dimension_id: 6,
  content: "Record rent payments"
  })

#Section 6
Question.create!({
  dimension_id: 1,
  content: "Set up and operate machines to make products"
  })

Question.create!({
  dimension_id: 1,
  content: "Put out forest fires"
  })

Question.create!({
  dimension_id: 2,
  content: "Invent a replacement for sugar"
  })

Question.create!({
  dimension_id: 2,
  content: "Do laboratory tests to identity diseases"
  })

Question.create!({
  dimension_id: 3,
  content: "Sing in a band"
  })

Question.create!({
  dimension_id: 3,
  content: "Edit movies"
  })

Question.create!({
  dimension_id: 4,
  content: "Take care of children at a day-care center"
  })

Question.create!({
  dimension_id: 4,
  content: "Teach a high-school class"
  })

Question.create!({
  dimension_id: 5,
  content: "Sell merchandise at a department store"
  })

Question.create!({
  dimension_id: 5,
  content: "Manage a clothing store"
  })

Question.create!({
  dimension_id: 6,
  content: "Keep inventory records"
  })

Question.create!({
  dimension_id: 6,
  content: "Stamp, sort, and distribute mail for an organization"
  })

i = 1
User.all.each do |user|
  Question.all.each do |question|
    Answer.create!({ user_id: user.id, question_id: question.id, answer_choice: i })
  end
  i = (i + 1) % 6
end

conversation = Conversation.create!
Message.create!({ conversation_id: conversation.id, receiver_id: demo.id, sender_id: 10, content: "Hi!"})

Message.create!({ conversation_id: conversation.id, receiver_id: 10, sender_id: demo.id, content: "Hey there!"})
