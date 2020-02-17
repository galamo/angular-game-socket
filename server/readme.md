# Authentication
- register + bcrypt hash
- login - use JWT 
- JWT token encryption should not be symetric
- use privatekey to sign , public to verify
- angular client should extract jwt token and save it inisde localstorage
- interceptor will concat the token into the headers object ( make sure its not login / register/ healthcheck)