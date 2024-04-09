import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { InsuranceType } from 'src/enums';

/**
 * Data transfer object for filter insurance functionality.
 */
export class FilterInsuranceDto {
  /**
   * The type of insurance.
   */
  @ApiProperty({
    required: false,
    enum: InsuranceType,
    default: InsuranceType.Auto,
  })
  @IsEnum(InsuranceType, {
    message: 'Insurance type must be a valid enum value',
  })
  @IsOptional()
  readonly insuranceType: InsuranceType;

  /**
   * The premium amount for the insurance.
   */
  @ApiProperty({ required: false, default: 20000 })
  @IsNumber({}, { message: 'Premium amount must be a number' })
  @IsOptional()
  readonly premiumAmount: number;

  /**
   * The tenure of the insurance.
   */
  @ApiProperty({ required: false, default: 6 })
  @IsNumber({}, { message: 'Tenure must be a number' })
  @IsOptional()
  readonly tenure: number;
}
