const crypto = require('crypto');

exports.verifySecret = (reqBody, reqHeader) => {
<<<<<<< HEAD
    
    let signature = 'sha1=' + crypto.createHmac('sha1', process.env.SECRET_TOKEN)
    .update(reqBody)
    .digest('hex');
=======
    let signature = 'sha1' + crypto.createHmac('sha1', process.env.SECRET_TOKEN)
        .update(reqBody)
        .digest('hex');
>>>>>>> upstream/master

    let incomingHMAC = reqHeader['x-hub-signature'];

    let a = Buffer.alloc(Buffer.byteLength(signature), signature);
    let b = Buffer.alloc(Buffer.byteLength(incomingHMAC), incomingHMAC);

    return crypto.timingSafeEqual(a, b);
}