import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsMongoId, IsDate, IsEnum } from 'class-validator';
import { InsuranceType } from 'src/enums';

/**
 * Data transfer object for create user functionality.
 */
export class CreateInsuranceDto {
  /**
   * The policy number of the insured user.
   */
  @ApiProperty()
  @IsNumber({}, { message: 'Policy number must be a number' })
  readonly policyNumber: number;

  /**
   * The type of insurance.
   */
  @ApiProperty({ enum: InsuranceType, default: InsuranceType.Auto })
  @IsEnum(InsuranceType, {
    message: 'Insurance type must be a valid enum value',
  })
  readonly insuranceType: InsuranceType;

  /**
   * The insurance company name.
   */
  @ApiProperty()
  @IsString({ message: 'Insurance company name must be a string' })
  readonly insuranceCompanyName: string;

  /**
   * The start date of the insurance coverage.
   */
  @ApiProperty()
  @IsDate({ message: 'Start date must be a valid date' })
  readonly startDate: Date;

  /**
   * The end date of the insurance coverage.
   */
  @ApiProperty()
  @IsDate({ message: 'End date must be a valid date' })
  readonly endDate: Date;

  /**
   * The premium amount for the insurance.
   */
  @ApiProperty()
  @IsNumber({}, { message: 'Premium amount must be a number' })
  readonly premiumAmount: number;

  /**
   * The tenure of the insurance.
   */
  @ApiProperty()
  @IsNumber({}, { message: 'Tenure must be a number' })
  readonly tenure: number;

  /**
   * The user id of the insured user.
   */
  @ApiProperty()
  @IsMongoId({ message: 'User id must be a valid mongo id' })
  readonly userId: string;
}
