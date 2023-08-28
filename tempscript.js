function calculate()
{    
    let from=document.getElementById('from').value;
    let to=document.getElementById('to').value; 
    let num=Number(document.getElementById('input').value);
    let result;
    if (from =='Celsius' && to == 'Fahrenheit' )
    {
        result= num * (9/5) +32;
    }
    else if(from=='Celsius' && to == 'Kelvin')
    {
        result= num + 273.15;
    }
    else if(from=='Fahrenheit' && to == 'Celsius')
    {
        result = (num - 32) * (5/9);
    }
    else if (from=='Fahrenheit' && to == 'Kelvin')
    {
        result = (num - 32) * (5/9)+273.15;
    }
    else if (from == 'Kelvin' && to == 'Fahrenheit')
    {
        result=(num - 273.15) * (9/5) +32;
    }
    else if (from == 'Kelvin' && to == 'Celsius')
    {
        result=(num - 273.15);
    }
    else{
        result=num;
    }
    document.getElementById('output').value=result;
}