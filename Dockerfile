### State 1
FROM node as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

### State 2
FROM nginx

ADD ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /var/www/app/

EXPOSE 80

CMD ["nginx","-g","daemon off;"]