import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';

jest.mock('react-modal', () => {
    const React = require('react');

    const Modal = ({ isOpen, children, onAfterOpen, onRequestClose }) => {
        React.useEffect(() => {
            if (isOpen && onAfterOpen) {
                onAfterOpen();
            }
        }, [isOpen, onAfterOpen]);

        if (!isOpen) {
            return null;
        }

        return (
            <div data-testid="mock-modal" tabIndex={-1} onKeyDown={onRequestClose}>
                {children}
            </div>
        );
    };

    Modal.setAppElement = () => {};

    return Modal;
});

import Projectmodal from './modal';

const project = {
    name: 'Projet test',
    description: 'Une description brève',
    stack: ['React', 'Testing Library'],
    url: 'https://example.com',
    src: 'https://example.com/src'
};

describe('Projectmodal', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="root"></div>';
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    test('ouvre et ferme le modal via le bouton et la touche Échap', async () => {
        render(<Projectmodal project={project} positionX={0} />);

        fireEvent.click(screen.getByText(/more info/i));
        const modalContent = await screen.findByTestId('mock-modal');
        expect(modalContent).toHaveTextContent(project.name);

        fireEvent.keyDown(modalContent, { key: 'Escape', code: 'Escape', keyCode: 27 });

        act(() => {
            jest.runAllTimers();
        });

        await waitFor(() => {
            expect(screen.queryByText(project.name)).not.toBeInTheDocument();
        });
    });
});
