FROM node:alpine

RUN mkdir -p /usr/src/aws-dropbox && chown -R node:node /usr/src/aws-dropbox

WORKDIR /usr/src/aws-dropbox

COPY package.json yarn.lock ./

USER node

RUN npm install --pure-lockfile

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm","run","dev"]

