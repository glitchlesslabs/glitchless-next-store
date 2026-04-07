import {
  CheckboxInput,
  FormContainer,
  FormInput,
  ImageInput,
  PriceInput,
  SubmitButton,
  TextAreaInput,
} from '@/components/form';
import { createProductAction } from '@/utils/actions';

function CreateProductPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold capitalize">create product</h1>
      <div className="rounded-md border p-8">
        <FormContainer action={createProductAction}>
          <div className="my-4 grid gap-4 md:grid-cols-2">
            <FormInput type="text" name="name" label="product name" />
            <FormInput type="text" name="company" label="company" />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput name="description" labelText="product description" />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
