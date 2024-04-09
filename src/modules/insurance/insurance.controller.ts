import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Res,
  HttpStatus,
  HttpException,
  NotFoundException,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { InsuranceService } from './service/insurance.service';
import { CreateInsuranceDto, UpdateInsuranceDto } from './dto';
import { generalResponse } from 'src/utils';
import { FilterInsuranceDto } from './dto/filter-insurance.dto';

@ApiTags('Insurance')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('insurance')
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {}

  /**
   * @description create insurance
   * @method POST
   * @param createInsuranceDto
   * @return newly created insurance {}
   */
  @ApiBearerAuth()
  @ApiBody({
    type: CreateInsuranceDto,
    description: 'Payload to filter insurances',
  })
  @Post()
  async create(
    @Res() response: Response,
    @Body() createInsuranceDto: CreateInsuranceDto,
  ) {
    try {
      const data = await this.insuranceService.create(createInsuranceDto);

      generalResponse({
        response,
        message: 'Insurance created successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description get all insurance paginated
   * @method GET
   * @param page
   * @param limit
   * @return paginated insurance {}
   */
  @ApiBearerAuth()
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
  })
  @UseGuards(AuthGuard('validate_token'))
  @Get('paginated')
  async findAllPaginated(
    @Res() response: Response,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    try {
      const data = await this.insuranceService.findAllWithPagination({
        page: page || 1,
        limit: limit || 10,
      });

      generalResponse({
        response,
        message: 'Insurance found successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description get all insurance
   * @method GET
   * @return Insurance {}
   */
  @ApiBearerAuth()
  @UseGuards(AuthGuard('validate_token'))
  @Get()
  async findAll(@Res() response: Response) {
    try {
      const data = await this.insuranceService.findAll({});

      generalResponse({
        response,
        message: 'Insurance found successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description get a insurance by id
   * @method GET
   * @param id
   * @return insurance {}
   */
  @ApiBearerAuth()
  @UseGuards(AuthGuard('validate_token'))
  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    try {
      const data = await this.insuranceService.findOne({ _id: id });
      if (!data) {
        throw new NotFoundException('Enter a valid Insurance ID');
      }

      generalResponse({
        response,
        message: 'Insurance found successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description get a insurance by policy number
   * @method GET
   * @param policyNumber
   * @return insurance {}
   */
  @ApiBearerAuth()
  @UseGuards(AuthGuard('validate_token'))
  @Get('policy-number/:policyNumber')
  async findInsuranceByPolicyNumber(
    @Res() response: Response,
    @Param('policyNumber') policyNumber: string,
  ) {
    try {
      const data = await this.insuranceService.findOne({ policyNumber });
      if (!data) {
        throw new NotFoundException('Enter a valid Insurance ID');
      }

      generalResponse({
        response,
        message: 'Insurance found successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description get all insurance paginated
   * @method GET
   * @param page
   * @param limit
   * @return paginated insurance {}
   */
  @ApiBearerAuth()
  @UseGuards(AuthGuard('validate_token'))
  @ApiBody({
    type: FilterInsuranceDto,
    description: 'Payload to filter insurances',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
  })
  @Post('filter-by-user-quote')
  async findAllPaginatedByUserQuote(
    @Res() response: Response,
    @Body() body: FilterInsuranceDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    try {
      const { insuranceType, premiumAmount, tenure } = body;

      const filters = {
        ...(insuranceType && { insuranceType }),
        ...(premiumAmount && { premiumAmount }),
        ...(tenure && { tenure }),
      };

      const data = await this.insuranceService.findAllWithPagination({
        filterQuery: filters,
        page,
        limit,
      });

      generalResponse({
        response,
        message: 'Insurance found successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description update insurance
   * @method PATCH
   * @param id
   * @param updateInsuranceDto
   * @return updated insurance {}
   */
  @ApiBearerAuth()
  @UseGuards(AuthGuard('validate_token'))
  @Patch(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateInsuranceDto: UpdateInsuranceDto,
  ) {
    try {
      const data = await this.insuranceService.update(
        { _id: id },
        updateInsuranceDto,
      );

      generalResponse({
        response,
        message: 'Insurance updated successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }

  /**
   * @description delete insurance
   * @method DELETE
   * @param id
   * @return deleted insurance {}
   */
  @ApiBearerAuth()
  @UseGuards(AuthGuard('validate_token'))
  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      const data = await this.insuranceService.remove({ _id: id });

      generalResponse({
        response,
        message: 'Insurance deleted successfully',
        status: HttpStatus.OK,
        data,
      });
    } catch (error) {
      throw new HttpException(error['message'], error['status']);
    }
  }
}
