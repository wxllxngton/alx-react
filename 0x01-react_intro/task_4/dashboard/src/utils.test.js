import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Testing utils functions', () => {
    describe('Gets The Current Full Year', () => {
        it('Returns the correct current year', () => {
            const expected = new Date().getFullYear();
            expect(getFullYear()).toBe(expected);
        });
    });
    describe('Gets The Correct Footer', () => {
        it('Returns Holberton School when true', () => {
            expect(getFooterCopy(true)).toBe('Holberton School');
        });
        it('Returns Holberton School main dashboard when false', () => {
            expect(getFooterCopy(true)).toBe('Holberton School main dashboard');
        });
    });
    describe('Gets The Latest Notification', () => {
        it('Returns the correct string', () => {
            expect(getLatestNotification()).toBe(
                '<strong>Urgent requirement</strong> - complete by EOD'
            );
        });
    });
});
