require 'net/http'
require 'open-uri'

get '/' do
  # res = JSON.parse(Net::HTTP.get(URI.parse("http://www.locomotion.mx/users/inscritos_api?spots_token=7cc4a56448fbc6fbd862008dbf5a52f7b6d25e4c")))
  res = ""
 	@students = students_check(res)
  erb :index
end

post '/assign_spot' do
	student = Student.find_by_codea_id(params[:student])
	spot = Spot.find_by(spot: params[:spot]).update_attributes!(student: params[:student], classroom_id: params[:room])
	p "Exito"
	student.name.split(" ").first
end

post '/check_spot' do
	spot = Spot.find_or_create_by(spot: params[:spot])
	spot.student
end