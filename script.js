function validateform(){
    var fname=document.validation.fname.value;
    var lname=document.validation.lname.value;
    var city=document.validation.city.value;
    var number=document.validation.num.value;
    var addr=document.validation.addr.value;

    if(fname==null || fname=="")
    {
        alert("Enter your name");
        return false;
    }
    else if(lname==null || lname=="")
        {
            alert("Enter your last name");
            return false;
        }
    else if(city==null || city=="")
        {
            alert("Enter your city");
            return false;
        }
    else if(number==null || number=="")
        {
            alert("Enter your number");
            return false;
        }
    else if(addr==null || addr=="")
        {
            alert("Enter your address");
            return false;
        }
    else if(number.length!=10)
    {
            alert("Invalid Number");
            return false;
    }
    else
    {
        alert("Thank you for your order");
        return true;
    }
    
}