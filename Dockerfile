# build environment
FROM node:19.4.0-alpine AS build
WORKDIR /bozynski_alina_ui_garden
ENV PATH /bozynski_alina_ui_garden/node_modules/.bin:$PATH
COPY package.json /bozynski_alina_ui_garden/
COPY package-lock.json /bozynski_alina_ui_garden/
RUN npm i --silent
COPY . /bozynski_alina_ui_garden/
CMD ["npm", "run", "build-storybook"]

# production environment
FROM nginx:stable
EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build bozynski_alina_ui_garden/storybook-static /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]