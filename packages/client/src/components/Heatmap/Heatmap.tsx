import React from 'react';
import styled from 'styled-components';
import { DependenciesTable } from '../DependenciesTable/DependenciesTable';

const NavbarContainer = styled.div``;

export const Heatmap = () => (
    <React.Fragment>
        <NavbarContainer />
        <DependenciesTable />
    </React.Fragment>
)
