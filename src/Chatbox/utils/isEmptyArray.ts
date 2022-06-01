export default (value: any): boolean => !(Array.isArray(value) && value.length > 0);
