function validateform(){
    var fname=document.validation.fname.value;
    var lname=document.validation.lname.value;
    var city=document.validation.city.value;
    var number=document.validation.num.value;
    var addr=document.validation.addr.value;

    if(fname==null || fname=="")
    {
        alert("Enter your name");
    }
    else if(lname==null || lname=="")
        {
            alert("Enter your last name");
        }
    else if(city==null || city=="")
        {
            alert("Enter your city");
        }
    else if(number==null || number=="")
        {
            alert("Enter your number");
        }
    else if(addr==null || addr=="")
        {
            alert("Enter your address");
        }
    else if(number.length!=10)
    {
            alert("Invalid Number");
    }
    else
    {
        alert("Form Submitted Successfully");
            document.getElementById("fname").value="";
            document.getElementById("lname").value="";
            document.getElementById("city").value="";
            document.getElementById("number").value="";
            document.getElementById("addr").value="";
    }
    
}
