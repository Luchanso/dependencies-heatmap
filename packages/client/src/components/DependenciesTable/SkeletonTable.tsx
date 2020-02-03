import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { RootPaper } from './styled';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { AddSourceButton } from '../AddSourceButton/AddSourceButton';
import { Filter } from '../Filter/Filter';

export const SkeletonTable = () => (
  <RootPaper>
    <Filter />
    <Table size="small" stickyHeader>
        <TableHead>
          <TableRow>
              <TableCell>
                <AddSourceButton />
              </TableCell>
            {
              new Array(6).fill(0).map((_, index) => (
                <TableCell key={index}>
                  <Skeleton variant="text" width={160} />
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
            {
              new Array(6).fill(0).map((_, indexRow) => (
                <TableRow key={indexRow}>
                  { new Array(7).fill(0).map((_, indexCell) => (
                    <TableCell key={indexCell}>
                      <Skeleton variant="text" width={160} />
                    </TableCell>
                  )) }
                </TableRow>
              ))
            }
            <TableRow></TableRow>
        </TableBody>
    </Table>
  </RootPaper>
);
