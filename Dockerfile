FROM node:18

WORKDIR /app

# Do NOT copy package-lock.json (Windows lockfiles break npm ci in Linux)
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
