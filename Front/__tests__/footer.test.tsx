import {describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Footer from '../src/components/footer';
import React from 'react';

describe("Footer test", () => {
    test("should render footer text ", () => {
        
        render(<Footer />);

        expect(screen.getByText('© 2023 Mickael Rébeau All rights reserved.')).toBeDefined();
    })
})