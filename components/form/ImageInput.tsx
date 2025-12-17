import { Label } from '../ui/label';
import { Input } from '../ui/input';

function ImageInput() {
  const name = 'image';

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize font-Vazir'>
        تصویر محصول :
      </Label>
      <Input id={name} name={name} type='file' required accept='image/*' className='pt-2'/>
    </div>
  );
}
export default ImageInput;
