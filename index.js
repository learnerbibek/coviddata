const express = require("express")
const app = express();
const port = 3000||process.env.PORT



app.get("/",async (req,res)=>{

    res.send("This is Landing Page");

});


app.get("/all",async (req,res)=>{
    const userdata =[
        {
            "District":"Rupandehi",
            "Recovered":70,
            "Death":7,
            "Total_Case":300
        },
        {
            "District":"Kathmandu",
            "Recovered":70,
            "Death":5,
            "Total_Case":200
        },
        {
            "District":"Pokhara",
            "Recovered":70,
            "Death":6,
            "Total_Case":56
        }, {
            "District":"BurtiBang",
            "Recovered":40,
            "Death":0,
            "Total_Case":34
        },
        {
            "District":"Bhaktapur",
            "Recovered":1270,
            "Death":9,
            "Total_Case":400
        },
        {
            "District":"Dhulikhel",
            "Recovered":0,
            "Death":0,
            "Total_Case":20
        }
    ]
    res.send(userdata)
})


app.listen(port,()=>{
    console.log("Starting the Server in port :"+port)
})