FROM node:20.12.0-alpine3.19

WORKDIR /app

# Copy package files and Prisma schema first
COPY package.json package-lock.json tsconfig.json ./
COPY prisma ./prisma

# Copy the rest of the application files
COPY . .

# Install dependencies
RUN npm install

# Run the database generation script
RUN npm run db:generate

# Build the application
RUN npm run build --verbose

CMD ["npm", "run", "start-app"]
