const crypto = require('crypto');

exports.verifySecret = (reqBody, reqHeader) => {
    let signature = 'sha1' + crypto.createHmac('sha1', process.env.SECRET_TOKEN)
    .update(reqBody)
    .digest('hex');

    return crypto.timingSafeEqual(signature, reqHeader['x-hub-signature']);
}