import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { TestapiService } from './testapi.service';

import { CreateTestapiDto } from './dto/create-testapi.dto';
import { UpdateTestapiDto } from './dto/update-testapi.dto';
import { Testapi } from './entities/testapi.entity';

@ApiTags('Testapi')
@Controller('testapi')
export class TestapiController {
  constructor(private readonly testapiService: TestapiService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Test was created', type: Testapi })
  @ApiResponse({ status: 400, description: 'Bad request', schema: {} })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related', schema: {} })
  create(@Body() createTestapiDto: CreateTestapiDto) {
    return this.testapiService.create(createTestapiDto);
  }

  @Get()
  findAll() {
    return this.testapiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testapiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestapiDto: UpdateTestapiDto) {
    return this.testapiService.update(+id, updateTestapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testapiService.remove(+id);
  }
}
