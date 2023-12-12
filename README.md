## Instructions
1) Clone this repository
```git clone https://github.com/binar-collab-3/mini-ecommerce.git```
2) Change branch main to dev
``` git checkout dev ```
4) Create your .env in local repository (or you can see an example in env.example file)
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
*.temp.js
prisma/seed.js
README.md
```
6) Happy Coding 😃
