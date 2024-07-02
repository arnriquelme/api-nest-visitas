import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/entitys';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '@nestjs/axios';
//import { FirebaseModule } from 'src/firebase/firebase.module';
import { VisitasController } from './visitas/visitas.controller';
import { VisitasService } from './visitas/visitas.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { ConfiguracionesController } from './configuraciones/configuraciones.controller';
import { ConfiguracionesService } from './configuraciones/configuraciones.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { TipodocumentoController } from './tipodocumento/tipodocumento.controller';
import { TipodocumentoService } from './tipodocumento/tipodocumento.service';
import { RolespantallasController } from './rolespantallas/rolespantallas.controller';
import { RolespantallasService } from './rolespantallas/rolespantallas.service';

@Module({
    imports: [
        AuthModule,
        HttpModule,
        MulterModule.register(),
        TypeOrmModule.forFeature([
            UsuarioEntity
        ]),
        //FirebaseModule
    ],
    controllers: [ VisitasController, DashboardController, ConfiguracionesController, UsuariosController, TipodocumentoController, RolespantallasController],
    providers: [ VisitasService, DashboardService, ConfiguracionesService, UsuariosService, TipodocumentoService, RolespantallasService]
})
export class ApiModule {}
