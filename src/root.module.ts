import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'system',
      database: 'apple',
      entities: [__dirname + '/../**/*.entity.js'] ,
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {
  constructor(){
     console.log(`==> ${__filename}`)
  }
}
