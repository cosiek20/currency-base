export const convertPLNToUSD = (PLN) => {

  if(PLN === undefined || typeof PLN === 'string'){return NaN}
  if(PLN < 0){return '$0.00'}
  if(typeof PLN === 'number'){
    const PLNtoUSD = PLN / 3.5;
  
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  
    return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
  } else {
    return 'Error'
  }


}