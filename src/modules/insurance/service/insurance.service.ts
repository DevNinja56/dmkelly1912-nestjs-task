import { Injectable } from '@nestjs/common';
import { InsuranceRepository } from '../repository/insurance.repository';
import { EntityServices } from 'src/modules/common/entity.service';

/**
 * Service responsible for handling Insurance-related operations.
 */
@Injectable()
export class InsuranceService extends EntityServices {
  /**
   * Creates an instance of InsuranceService.
   * @param insuranceRepository The Insurance repository used for database operations.
   */
  constructor(private readonly insuranceRepository: InsuranceRepository) {
    super(insuranceRepository);
  }
}
