// export * from './input'
// export * from './logic'
import { ProductInputComponent, ProductInputMetadata } from './input';
import { ProductLogicComponent, ProductLogicMetadata } from './logic';
import { ProductFormComponent, ProductFormMetadata } from './form';
import { ProductSelectComponent, ProductSelectMetadata } from './select';
import { ProductCheckboxComponent, ProductCheckboxMetadata } from './checkbox';
import { ProductTextComponent, ProductTextMetadata } from './text';
// import { ProductFormItemComponent,ProductFormItemMetadata } from './formitem';

export const ProductComponent = [
  ProductInputComponent,
  ProductLogicComponent,
  ProductFormComponent,
  ProductSelectComponent,
  ProductCheckboxComponent,
  ProductTextComponent,
  // ProductFormItemComponent,
];
export const ProductMetadata = [
  ProductInputMetadata,
  ProductLogicMetadata,
  ProductFormMetadata,
  ProductSelectMetadata,
  ProductCheckboxMetadata,
  ProductTextMetadata,
  // ProductFormItemMetadata,
];
