import { Module } from '@nestjs/common';
import { TestapiModule } from './testapi/testapi.module';

@Module({
  imports: [TestapiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
