import React from 'react';

interface context {
  type: any;
}

export const UserContext = React.createContext<context['type']>('');
