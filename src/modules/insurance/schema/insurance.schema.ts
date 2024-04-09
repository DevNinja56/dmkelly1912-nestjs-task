import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document, Schema as MongooseSchema } from 'mongoose';
import { InsuranceType } from 'src/enums';

/**
 * Represents a user in the system.
 */
@Schema({
  toJSON: {
    virtuals: true,
    /**
     * Transforms the document before converting it to JSON.
     * Removes the "_id" and "__v" fields from the JSON representation.
     * @param doc - The document being transformed.
     * @param ret - The transformed JSON representation of the document.
     * @returns The transformed JSON representation of the document.
     */
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
  timestamps: true,
})
export class Insurance extends Document {
  /**
   * The policy number of the insured user.
   */
  @Prop({
    type: Number,
    required: true,
  })
  policyNumber: number;

  /**
   * The type of insurance.
   */
  @Prop({
    type: String,
    enum: InsuranceType,
    required: true,
  })
  insuranceType: InsuranceType;

  /**
   * The insurance company name.
   */
  @Prop({
    type: String,
    required: true,
  })
  insuranceCompanyName: string;

  /**
   * The start date of the insurance coverage.
   */
  @Prop({
    type: Date,
    required: true,
  })
  startDate: Date;

  /**
   * The end date of the insurance coverage.
   */
  @Prop({
    type: Date,
    required: true,
  })
  endDate: Date;

  /**
   * The premium amount for the insurance.
   */
  @Prop({
    type: Number,
    required: true,
  })
  premiumAmount: number;

  /**
   * The tenure of the insurance.
   */
  @Prop({
    type: Number,
    required: true,
  })
  tenure: number;

  /**
   * The user ID of the insured user.
   */
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Users',
    required: true,
  })
  userId: MongooseSchema.Types.ObjectId;
}

/**
 * Represents a hydrated user document.
 */
export type InsuranceDocument = HydratedDocument<Insurance>;

/**
 * The Mongoose schema for the Insurance collection.
 */
export const InsuranceSchema = SchemaFactory.createForClass(Insurance);
