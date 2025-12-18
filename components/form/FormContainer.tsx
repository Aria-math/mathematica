'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from '@/utils/types';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction; // doesn't complain for toggleFavoriteAction parameters mismatch. read 'Next server actions/TS and server actions'
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();
  const router = useRouter();
  
  useEffect(() => {
    if (state.message) {
      toast({
        description: (
          <div className="flex items-center justify-between">
            {state.message.startsWith('ERROR') ? (
              <IoCloseCircleSharp className="text-red-500 h-6 w-6 flex-shrink-0 mr-1" />
            ) : (
              <IoIosCheckmarkCircle className="text-green-500 h-6 w-6 flex-shrink-0 mr-1" />
            )}

            <div className="pr-2 font-Vazir text-right">
              {state.message.startsWith('ERROR')
                ? state.message.slice(6)
                : state.message}
            </div>
          </div>
        ),
        variant: state.message.startsWith('ERROR') ? 'destructive' : 'success',
      });
      if (!state.message.startsWith('ERROR')) {
        router.refresh();
      }
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
