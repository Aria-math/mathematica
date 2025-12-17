'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from '@/utils/types';

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
  useEffect(() => {
    if (state.message) {
      toast({
        description: <div className="font-Vazir">{state.message}</div>,
        variant: state.message.startsWith('ERROR') ? 'destructive' : 'success',
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
