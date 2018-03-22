FROM node:6.10.3

# Bundle app source
ADD . /build

# Install app dependencies
RUN cd /build \
    && npm install \
    && npm install -g nodemon \
    && npm install -g pm2 \
    && pwd

CMD ["pm2-docker", "./build/process.development.json"]