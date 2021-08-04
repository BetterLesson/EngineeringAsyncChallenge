FROM node:16-alpine3.11
RUN apk add --no-cache git
RUN yarn global add create-react-app
WORKDIR /app
RUN npx create-react-app .
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
COPY . .

CMD ["yarn", "start"]

