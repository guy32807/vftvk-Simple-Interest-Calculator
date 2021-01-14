const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = document.getElementById("result").value;
    var interest = principal * parseInt(years) * rate/100
    var currentYear = new Date()
    var futureyear = currentYear.getFullYear() + parseInt(years);
    console.log(futureyear)

    if(!isNaN(principal) && principal > 0){
        document.getElementById("result").innerHTML = "If you deposit " + formatter.format(principal) + ", at an interest rate of " + rate + "%. You will receive an amount of " + formatter.format(interest) + ", in the year " + futureyear;
    }
    else{
        alert("Please enter a valid numeric dollar amount!")
        document.getElementById("principal").focus()
    }
 
}

function updateRate(val){
    document.getElementById("inputtext").value = val;
}