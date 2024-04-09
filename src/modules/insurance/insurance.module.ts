import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { InsuranceController } from './insurance.controller';
import { InsuranceService } from './service/insurance.service';
import { InsuranceRepository } from './repository/insurance.repository';
import { Insurance, InsuranceSchema } from './schema/insurance.schema';

/**
 * Represents the insurance module of the application.
 * This module is responsible for handling insurance-related operations.
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Insurance.name, schema: InsuranceSchema },
    ]),
  ],
  controllers: [InsuranceController],
  providers: [InsuranceService, InsuranceRepository],
  exports: [InsuranceService],
})
export class InsuranceModule {}
