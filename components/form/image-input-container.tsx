'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { FormContainer } from './form-container';
import { ImageInput } from './image-input';
import { SubmitButton } from './buttons';
import { type actionFunction } from '@/utils/types';

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

export const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        className="mb-4 h-50 w-50 rounded object-cover"
        alt={name}
        priority
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4 max-w-md">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" text={text} />
          </FormContainer>
        </div>
      )}
    </div>
  );
};
