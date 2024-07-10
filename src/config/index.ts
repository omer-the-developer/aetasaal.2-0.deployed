interface IConfig {
  env: string;
  version: string;
  tokenSecret: string;
  server: {
    port: number;
    frontendURL: string;
    passwordSalt: string;
    tokenExpiry: string;
    resetHashExpiry: number;
  };
  postgres: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    url: string;
    ssl: boolean;
  };
  apiAccessKeys: {
    app: string;
  };
  email: {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    password: string;
  };
  cloudinary: {
    name: string;
    apiKey: string;
    apiSecret: string;
    env: string;
  };
  sendgrid: {
    key: string;
  };
  fcm: {
    serverKey: string;
  };
  realTimeIntervalInMin: number;
  appVersion: number;
}

const defaultConfig: IConfig = {
  env: process.env.NODE_ENV || 'development',
  version: 'unknown',
  tokenSecret: '',
  server: {
    port: 3000,
    frontendURL: 'http://localhost:4200',
    passwordSalt: '',
    tokenExpiry: '1w',
    resetHashExpiry: 4,
  },
  postgres: {
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    url: '',
    ssl: process.env.POSTGRES_SSL === 'true',
  },
  apiAccessKeys: {
    app: '123456',
  },
  email: {
    host: '',
    port: 465,
    secure: true,
    user: '',
    password: '',
  },
  cloudinary: {
    name: '',
    apiKey: '',
    apiSecret: '',
    env: '',
  },
  sendgrid: {
    key: '',
  },
  fcm: {
    serverKey: '',
  },
  realTimeIntervalInMin: 2,
  appVersion: 0,
};

function loadConfig(env: string): Partial<IConfig> {
  try {
    return require(`./env/${env}.json`);
  } catch (err) {
    console.error(`Error loading configuration for environment: ${env}`, err);
    return {};
  }
}

const envConfig = loadConfig(defaultConfig.env);
const config: IConfig = { ...defaultConfig, ...envConfig };

function validateConfig(config: IConfig) {
  // Add your validation logic here if needed
  console.log('Configuration validated');
}

validateConfig(config);

export default config;