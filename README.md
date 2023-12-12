## Instructions
1) Clone this repository
```git clone https://github.com/KelfinTDetonator/Binar-challenge-chapter-7.git```
2) Create your .env in local repository (or you can see an example in env.example file)
```
PORT= YOUR_PORT
DATABASE_URL= YOUR_DATABASE_URL
SECRET_KEY= YOUR_SECRET_KEY
```
3) Install all dependencies ```npm install```
4) Migrate database ```npx prisma migrate dev```
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

:black_medium_square: Node mailer :e-mail:
