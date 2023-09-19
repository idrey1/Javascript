const boleto = 'vip';
//let codigoAcceso;

// if(boleto === 'vip'){
//     codigoAcceso = 'VIP-123-456';
// }else{
//     codigoAcceso = 'REGULAR-456-789';
// }

const codigoAcceso = (boleto === 'vip') ? 'VIP-123-456':'REGULAR-456-789';
console.log(codigoAcceso);

(boleto === 'vip') ? console.log('Tu boleto es VIP') : console.log('Tu boleto es REGULAR');