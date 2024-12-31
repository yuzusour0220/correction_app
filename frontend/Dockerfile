FROM node:22.11.0
# 必要なシステムパッケージをインストール
RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# # Next.js アプリケーションをビルド
# RUN npm run build

# # アプリケーションが使用するポートを指定
# EXPOSE 3000

# # アプリケーションの起動コマンドを指定
# CMD ["npm", "start"]

