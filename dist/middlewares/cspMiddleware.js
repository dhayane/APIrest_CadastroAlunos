"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

const cspMiddleware = (req, res, next) => {
  _helmet2.default.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Só permite fontes do mesmo domínio
      styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://www.gstatic.com'], // Permite fontes e CSS do Google
      fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Permite fontes do Google
      scriptSrc: ["'self'", 'https://www.gstatic.com'], // Permite scripts do Google
      // Outras regras conforme necessário
    }
  })(req, res, next);
};

exports. default = cspMiddleware;
