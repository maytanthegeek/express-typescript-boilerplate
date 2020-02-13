FROM node:lts-alpine
EXPOSE 3000
WORKDIR /opt

ENV NODE_ENV=production
ADD package.json .
RUN npm install

COPY ./dist .
CMD [ "npm", "start" ]