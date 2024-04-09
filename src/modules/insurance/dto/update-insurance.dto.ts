import { PartialType } from '@nestjs/swagger';
import { CreateInsuranceDto } from './create-insurance.dto';

/**
 * Data transfer object for updating a insurance.
 * Extends the `CreateInsuranceDto` class.
 */
export class UpdateInsuranceDto extends PartialType(CreateInsuranceDto) {}
