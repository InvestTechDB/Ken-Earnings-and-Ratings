# Earnings-and-Ratings

put

curl -H "Content-Type: application/json" -X GET -d '{"listingId":"1234567"}' http://localhost:3004/editEarnings/:id

curl -H "Content-Type: application/json" -X GET -d '{"listingId":"1234567"}' http://localhost:3004/editRatings/:id

post

curl -H "Content-Type: application/json" -X POST -d '{"name": 'name', "best_summary":'paragraph',"sell_summary":'paragraph'}' http://localhost:3004/newEarnings

curl -H "Content-Type: application/json" -X POST -d '{"name": 'name', "best_summary":'paragraph',"sell_summary":'paragraph'}' http://localhost:3004/newRatings