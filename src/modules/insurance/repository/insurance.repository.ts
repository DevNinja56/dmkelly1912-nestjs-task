import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Insurance, InsuranceDocument } from '../schema/insurance.schema';
import { EntityRepository } from 'src/modules/common/repository/entity.repository';

/**
 * Repository for managing Insurance entities.
 */
@Injectable()
export class InsuranceRepository extends EntityRepository<InsuranceDocument> {
  /**
   * Creates an instance of InsuranceRepository.
   * @param InsuranceModel The injected Mongoose model for the Insurance entity.
   */
  constructor(
    @InjectModel(Insurance.name) InsuranceModel: Model<InsuranceDocument>,
  ) {
    super(InsuranceModel);
  }
}
