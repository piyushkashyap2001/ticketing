FROM node:alpine
EXPOSE 5000
WORKDIR /app
COPY package.json .
RUN npm install  --only=prod
COPY . .

CMD ["npm", "start"]