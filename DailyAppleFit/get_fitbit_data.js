
//this is the access token of Gracie's Fitbit account .. 
//the user is going to need to be sent to an outh website to auth and can get the toekn from there

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzkzUjUiLCJzdWIiOiJCOUNDN0ciLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcm94eSBybnV0IHJwcm8gcnNsZSByYWN0IHJyZXMgcmxvYyByd2VpIHJociBydGVtIiwiZXhwIjoxNjY5NDU5MjUwLCJpYXQiOjE2Njk0MzA0NTB9.F5fSMfsF5Va65cAVdd5VCBZExwE4U_Naju2Ew1r1Cps"


//can chose which endpoint to use
fetch('https://api.fitbit.com/1/user/-/activities/date/today.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json)); 