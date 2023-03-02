import { getSecretValue } from './ssm';
import {
  getAwsRegion,
  getPostgresDatabase,
  getPostgresHost,
  getPostgresPassword,
  getPostgresPort,
  getPostgresSecretName,
  getPostgresSsl,
  getPostgresUser,
  getStage,
} from './env';

export const shouldUseSecretsManager = () => {
  const stage = getStage() as string;
  return !['local', 'offline'].includes(stage);
};

export const getAwsConfig = () => {
  const region = getAwsRegion();

  return {
    region,
  } as const;
};

export const getPostgresConfig = async () => {
  let host = getPostgresHost();
  let port = getPostgresPort();
  let user = getPostgresUser();
  let password = getPostgresPassword();
  let database = getPostgresDatabase();
  let ssl = getPostgresSsl();

  const secretName = getPostgresSecretName() as string;

  if (shouldUseSecretsManager()) {
    const postgresSecret = (await getSecretValue(secretName)) as string;
    const postgresSecretJson = JSON.parse(postgresSecret) as Record<
      string,
      string
    >;

    host = host || postgresSecretJson.host;
    port = port || postgresSecretJson.port;
    user = user || postgresSecretJson.username;
    password = password || postgresSecretJson.password;
    database = database || postgresSecretJson.database;
    ssl = ssl || postgresSecretJson.ssl;
  }

  return {
    host,
    port: parseInt(port || '', 10),
    user,
    password,
    database,
    ssl: ssl === 'true',
  } as const;
};
