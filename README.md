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

## Showcase
:black_medium_square: Login 
![Screenshot (1519)_LI](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/fa221416-d0e1-453b-bce8-f3ea81a2ff48)  
![Screenshot (1524)_LI](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/904c897e-019d-4f90-931e-c56d04f8c31b)

:black_medium_square: Forget Password Page  
![Screenshot (1520)_LI](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/3520e2fb-0044-490b-a1c9-17280512c295)  

:black_medium_square: Database  
![Screenshot (1520)](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/8469824e-f43d-439a-955d-4e6f8d3f7fe3)

:black_medium_square: Reset link  
![Screenshot (1523)_LI](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/ce8e7222-9f10-49eb-ab83-81ab68de647a)

:black_medium_square: Reset password is success  
![Screenshot (1516)](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/17dcd377-b9a2-4499-87f9-2786fe024b94)  
![Screenshot (1514)](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/c31f920d-53ad-4b6a-9b9b-5518e80c6d68)

:black_medium_square: Reset password is failed since the token is expired  
![Screenshot (1523)](https://github.com/KelfinTDetonator/Binar-challenge-chapter-7/assets/91953273/12d383c0-8d77-4fb9-8f54-c5d2b80fe71c)

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
:black_medium_square: Learn how to create a feature to reset an user password with node mailer  
:black_medium_square: Learn how to use a websocket
