  const data = [
    {
        pincode: 520066,
        delivery:2,
        COD:true,

    },
    {
        pincode: 520067,
        delivery:1,
        COD:false,
    }

]

// console.log("hi")



let btn = document.getElementById("btn")
const input = document.getElementById("input")
const head = document.getElementById("heading")
const divs = document.getElementById("divs")
const cod = document.getElementById("cod")
const delivery = document.getElementById("delivery")



const cal = ()=>{
    
    
    let dat = document.getElementById("input").value
    
    
    
       
    // console.log(date.getDate()+1)
    if(dat.length < 6 ||dat.length > 6  ){
        head.innerText = "not available"
    }


    if(dat.length == 6){
      
        for(let i = 0 ;i< data.length ; i++){
            let date = new Date();
            console.log(date.getDate())
            if(data[i].pincode == dat){
                
                //    date.setDate(date.getDay()+ data[i].delivery)
                  
                cod.innerText = data[i].COD 
                divs.style.display = "block"
                let nextday = new Date(date)
                console.log(nextday)
                nextday = date.setDate( date.getDay() + data[i].delivery)
                const newdate = new Date(nextday)
                const dat =newdate.getDay() +" " + newdate.getMonth()+ " "+  + newdate.getFullYear()
                delivery.innerText = dat
               
                
            }
           
        }
    }
    
}




btn.addEventListener("click", cal);


