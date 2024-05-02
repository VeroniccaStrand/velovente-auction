  # MERN Projektmall

Detta är en mall för att snabbt komma igång med en MERN (MongoDB, Express, React, Node.js) stack. Projektet är uppdelat i en klient och en server.

## Backend

### Tekniker

- **Express**: Minimalistiskt webbramverk för Node.js.
- **Mongoose**: Eleganta MongoDB-objektmodellering för Node.js.
- **bcrypt**: Krypteringsbibliotek för säker lagring av lösenord.
- **jsonwebtoken**: Genererar och verifierar JSON Web Tokens för autentisering.
- **dotenv**: Hantering av miljövariabler.

### Dependencies


    {
    "dependencies": {
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-async-handler": "^1.2.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.3.2"
      },
    "devDependencies": {
    "concurrently": "^8.2.2",
    "nodemon": "^3.1.0"
    }
    }


## Struktur

### Middleware
- **authMiddleware:** Middleware för autentisering.
- **errorMiddleware:** Middleware för felhantering.

### Utils
- **generateToken.js:** Verktyg för att generera JSON Web Tokens.

## Frontend

### Tekniker
- **React:** Bibliotek för att bygga användargränssnitt.
- **react-router-dom:** Routing-bibliotek för React-appar.

## Dependencies


    {
    "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
    },
    "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.0"
    }
  }




project-root/
│
├── client/         (Frontendkod - React)
│   ├── public/     (Statiska filer som HTML, bilder)
│   └── src/        (Källkod för React-appen)
│       ├── components/  (Återanvändbara komponenter)
│       ├── pages/       (Huvudkomponenter för olika sidor)
│       ├── App.js       (Huvudkomponent för React)
│       ├── index.js     (Inmatningspunkt för React-appen)
│       └── ...
│
├── server/         (Backendkod - Node.js, Express)
│   ├── config/     (Konfigurationsfiler, t.ex. för databasanslutning)
│   ├── controllers/    (Controllers för att hantera affärslogik)
│   ├── models/     (Mongoose-modeller för MongoDB-databasen)
│   ├── routes/     (API-routes)
│   ├── app.js      (Huvudfil för Express-appen, konfiguration och middleware)
│   └── ...
│
├── node_modules/   (Nedladdade Node.js-moduler och paket)
│
├── package.json    (Lista över projektets beroenden och konfiguration)
├── package-lock.json  (Exakt versionsnummer för nedladdade paket)
└── README.md       (Projektets dokumentation och instruktioner)


