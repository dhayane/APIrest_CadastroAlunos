import helmet from 'helmet';

const cspMiddleware = (req, res, next) => {
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Só permite fontes do mesmo domínio
      styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://www.gstatic.com'], // Permite fontes e CSS do Google
      styleSrcElem: ["'self'", 'https://fonts.googleapis.com', 'https://www.gstatic.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Permite fontes do Google
      scriptSrc: ["'self'", 'https://www.gstatic.com'], // Permite scripts do Google
      // Outras regras conforme necessário
    }
  })(req, res, next);
};

export default cspMiddleware;
