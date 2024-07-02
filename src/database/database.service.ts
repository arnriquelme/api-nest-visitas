import { ConfigType } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import config from "../config/config";
import * as mysql from 'mysql2';

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigType<typeof config>) => {
            const { database } = configService;
            
            return {
                type: 'mysql',
                host: database.host,
                port: Number(database.port),
                username: database.user,
                password: database.password,
                database: database.name,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
                synchronize: false,
            } as DataSourceOptions;
        },
        inject: [config.KEY]
    })
];
