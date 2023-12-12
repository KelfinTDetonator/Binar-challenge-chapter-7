## Usage Instructions
1) Clone this repository
```git clone https://github.com/KelfinTDetonator/Binar-challenge-chapter-7.git```
2) Create your .env in local repository (or you can see an example in env.sample file)
```
SECRET_KEY=JWT_KEY 
DATABASE_URL=YOUR_DATABASE_URL
PORT=
USER=YOUR_EMAIL
PASS=YOUR_GOOGLE_KEY
EXP_IN_MINUTE=RESET_LINK_EXPIRY_TIME
SENTRY_DSN=SENTRY_IO_CONFIG
```
3) ```npm install``` to install all packages provided in the package.json
4) ```npx prisma migrate dev``` to migrate your database from prisma.schema
5) Update your .gitignore
```
node_modules
.env
README.md
.sentryclirc
```
## Features
:black_medium_square: Login/Register Form  
:black_medium_square: Forget password to reset the password from an email (link)  
:black_medium_square: Node mailer 

## Technologies Used
:black_medium_square: Express Js  
:black_medium_square: Prisma + PostgreSQL  
:black_medium_square: EJS  
:black_medium_square: Bcrypt  
:black_medium_square: JWT Authentication  
:black_medium_square: Node Mailer  
:black_medium_square: Sentry.io  
:black_medium_square: Git  
:black_medium_square: Websocket socket.io 

## What I learned :computer:

:black_medium_square: Using a robust debugger sentry.io to solve bugs or errors in my code  
:black_medium_square: Learn how to use a websocket
