# quiz-builder
DevelopsToday Quiz Test

## Setup the REST API
cd backend

npm install

### .env variable
After installing all dependencies you'll need to create a .env file and add the following:

DATABASE_URL=""

### Prisma Configuration
npx prisma migrate dev

npx prisma generate

### Start the server
npm run dev

## Setup the FrontEnd
cd frontend

npm install

npm run dev
