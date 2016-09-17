/*
 Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

 getSecret() which returns the secret
 setSecret() which sets the secret

 obj = createSecretHolder(5)
 obj.getSecret() // returns 5
 obj.setSecret(2)
 obj.getSecret() // returns 2

 */

function createSecretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(value) {
            secret = value;
        }
    };
}

obj = createSecretHolder(5);
console.log(obj.getSecret());
obj.setSecret(2);
console.log(obj.getSecret());