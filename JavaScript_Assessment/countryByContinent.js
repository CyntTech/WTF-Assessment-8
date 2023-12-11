function CountryByContinent(country) { 
    const africaCountries = ['Nigeria' ,'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso',
                            'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic',
                            'Chad', 'Comoros', 'Democratic Republic of the Congo',
                            'Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea',
                            'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana',
                            'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia',
                            'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco',]; 

    const asiaCountries = ['China', 'India', 'Japan', 'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh']; 
    
    if (africaCountries.includes(country)) { 
        return 'Africa'; 
} else if (asiaCountries.includes(country)) { 
    return 'Asia'; } else { 
    return 'Not found in Africa or Asia'; 
} 
} 

console.log(CountryByContinent('Nigeria'));
console.log(CountryByContinent('Antartic')); 
console.log(CountryByContinent('Japan'));

