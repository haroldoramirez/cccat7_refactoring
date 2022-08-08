// @ts-nocheck
export function validate (str) {
	if (!str) return false; //Cláusulas Guarda
    str = str.replace(/\D+/g, ""); //Expressão regular onde qualquer letra que não seja números, remove.
    if (str.length !== 11) return false; //Cláusulas Guarda
    if (str.split("").every(c => c === str[0])) return false;
    let d1 = 0;  
    let d2 = 0; 
    for (let nCount = 1; nCount < str.length -1; nCount++) {  
        let digito = 0;     
        digito = parseInt(str.substring(nCount -1, nCount));  							
        d1 = d1 + ( 11 - nCount ) * digito;  
        d2 = d2 + ( 12 - nCount ) * digito;  
    };    
    let dg1 = 0; 
    let dg2 = 0;
    let rest = 0;
    rest = (d1 % 11);  
    dg1 = (rest < 2) ? dg1 = 0 : 11 - rest;  
    d2 += 2 * dg1;  
    rest = (d2 % 11);  
    dg2 = (rest < 2) ? 0 : 11 - rest; 
    let nDigVerific = str.substring(str.length-2, str.length);  
    let nDigResult = 0;   
    nDigResult = "" + dg1 + "" + dg2;  
    return nDigVerific == nDigResult;
}