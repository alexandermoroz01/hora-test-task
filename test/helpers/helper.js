export class Helper {
    /**
     * @param {number[]} array 
     * @returns {number} 
     */
    static sumArray(array) {
        if (!Array.isArray(array)) {
            throw new Error('Expected an array');
        }

        return array.reduce((accumulator, currentValue) => {
            const cleanedValue = parseFloat(currentValue.replace(/[^\d.-]/g, ''));
            return accumulator + cleanedValue;
        }, 0);
    }
}
