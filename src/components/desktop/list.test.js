import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Projectlist from './list';
import { HoverContext } from '../context/hoverlist';

const projects = require('../../projects.json');

describe('Projectlist', () => {
    test('affiche tous les projets et gère le survol', () => {
        const handleHover = jest.fn();

        const { container } = render(
            <HoverContext.Provider value={{ handleHover }}>
                <Projectlist />
            </HoverContext.Provider>
        );

        const projectElements = container.querySelectorAll('.p-element');
        expect(projectElements).toHaveLength(projects.list.length);

        fireEvent.mouseEnter(projectElements[0]);
        expect(handleHover).toHaveBeenCalledWith(projects.list[0].name);

        fireEvent.mouseLeave(projectElements[0]);
        expect(handleHover).toHaveBeenCalledWith(null);
    });
});
