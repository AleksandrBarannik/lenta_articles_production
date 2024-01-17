import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button> TestButton </Button>);
        expect(screen.getByText('TestButton')).toBeInTheDocument();
    });

    test('Test style class', () => {
        render(<Button theme={ButtonTheme.CLEAR}> TestButton </Button>);
        expect(screen.getByText('TestButton')).toHaveClass('clear');
        screen.debug();
    });
});
