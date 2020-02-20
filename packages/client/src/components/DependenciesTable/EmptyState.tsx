import { Typography } from '@material-ui/core';
import React from 'react';
import { AddSourceButton } from '../AddSourceButton/AddSourceButton';
import { EmptyStateHeader, EmptyStateWrapper } from './styled';

export function EmptyState() {
  return (
    <EmptyStateWrapper>
      <EmptyStateHeader>
        <Typography variant="h5">Get started</Typography>
        <Typography variant="body2">Add dependencies source from git projects</Typography>
      </EmptyStateHeader>
      <AddSourceButton />
    </EmptyStateWrapper>
  );
}
