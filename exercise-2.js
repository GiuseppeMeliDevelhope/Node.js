const crypto = require('crypto');

function generateRandomId() {
  const id = crypto.randomBytes(8).toString('hex');
  return id;
}

const randomId = generateRandomId();
console.log(randomId);

