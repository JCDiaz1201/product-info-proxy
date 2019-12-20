FROM node:10

# install dependencies
COPY package*.json ./

# Run NPM install
RUN npm ci --only=production

# bundle app source
COPY . .

EXPOSE 5500

CMD [ "node", "server/server.js" ]