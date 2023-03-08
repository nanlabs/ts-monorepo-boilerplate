export const getAwsRegion = () => process.env.AWS_REGION;

export const getStage = () => process.env.STAGE;

export const getPostgresSecretName = () => process.env.POSTGRES_SECRET_NAME;

export const getPostgresHost = () => process.env.POSTGRES_HOST;

export const getPostgresPort = () => process.env.POSTGRES_PORT;

export const getPostgresUser = () => process.env.POSTGRES_USER;

export const getPostgresPassword = () => process.env.POSTGRES_PASSWORD;

export const getPostgresDatabase = () => process.env.POSTGRES_DATABASE;

export const getPostgresSsl = () => process.env.POSTGRES_SSL;
