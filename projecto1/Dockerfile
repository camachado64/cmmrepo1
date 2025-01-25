FROM node:21
EXPOSE 3000
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["node","app.js"]