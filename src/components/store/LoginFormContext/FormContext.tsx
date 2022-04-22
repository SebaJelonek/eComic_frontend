import React from 'react';

interface context {
  type: any;
}

export const FormContext = React.createContext<context['type']>('');
