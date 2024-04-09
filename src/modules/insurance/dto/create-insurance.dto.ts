import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsMongoId,
  IsDate,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { InsuranceType } from 'src/enums';

/**
 * Data transfer object for create insurance functionality.
 */
export class CreateInsuranceDto {
  /**
   * The policy number of the insured user.
   */
  @ApiProperty({ required: false, default: 123456 })
  @IsNumber({}, { message: 'Policy number must be a number' })
  @IsOptional()
  readonly policyNumber: number;

  /**
   * The type of insurance.
   */
  @ApiProperty({
    required: true,
    enum: InsuranceType,
    default: InsuranceType.Auto,
  })
  @IsEnum(InsuranceType, {
    message: 'Insurance type must be a valid enum value',
  })
  readonly insuranceType: InsuranceType;

  /**
   * The insurance company name.
   */
  @ApiProperty({ required: true, default: 'ABC Company' })
  @IsString({ message: 'Insurance company name must be a string' })
  readonly insuranceCompanyName: string;

  /**
   * The start date of the insurance coverage.
   */
  @ApiProperty({ required: false })
  @IsString({ message: 'Start date must be a valid date' })
  @IsOptional()
  readonly startDate: Date;

  /**
   * The end date of the insurance coverage.
   */
  @ApiProperty({ required: false })
  @IsString({ message: 'End date must be a valid date' })
  @IsOptional()
  readonly endDate: Date;

  /**
   * The premium amount for the insurance.
   */
  @ApiProperty({ required: true, default: 20000 })
  @IsNumber({}, { message: 'Premium amount must be a number' })
  readonly premiumAmount: number;

  /**
   * The tenure of the insurance.
   */
  @ApiProperty({ required: true, default: 6 })
  @IsNumber({}, { message: 'Tenure must be a number' })
  readonly tenure: number;

  /**
   * The user id of the insured user.
   */
  @ApiProperty({ required: false, default: '60f7b3b3b3f3f3001f9b3b3f' })
  @IsMongoId({ message: 'User id must be a valid mongo id' })
  @IsOptional()
  readonly userId: string;
}
