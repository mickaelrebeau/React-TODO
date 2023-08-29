import {describe, expect, test} from 'vitest';
import { isLight } from '@/src/components/eurostar';


describe("Is light mode active", () => {
    test("should theme is light", () => {
        localStorage.setItem("vite-ui-theme", "light");
    
        expect(isLight()).toBe(true)
    })

    test("should theme is dark", () => {
        localStorage.setItem("vite-ui-theme", "dark");

        expect(isLight()).toBe(false)
    })

    test("should theme is system", () => {
        localStorage.setItem("vite-ui-theme", "system");

        expect(isLight()).toBe(false)
    })

    test("should theme is system", () => {
        localStorage.setItem("vite-ui-theme", "");

        expect(isLight()).toBe(false)
    })
})
