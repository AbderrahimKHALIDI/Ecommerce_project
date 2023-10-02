# Utilisez une image Node.js officielle comme image parent
FROM node:18.12.1

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le package.json et le package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste du code de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel votre API s'exécutera (par exemple, le port 3000)
EXPOSE 5000

# Démarrez votre application Node.js
CMD ["node", "server.js"]
