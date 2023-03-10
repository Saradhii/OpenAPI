FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

ENV PORT=8070

CMD ["npm","start"]