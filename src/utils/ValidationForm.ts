export default class Validator<
  T extends { [key: string]: string | number | object },
> {
  schema: any;
  constructor(schema: T) {
    if (typeof schema !== 'object') {
      return;
    }

    this.schema = schema;
  }
  check(name: string, value: string) {
    const { type, match, minLength, maxLength } = this.schema[name];

    if (type && type !== typeof value) {
      return [false, 'Invalid type of value!'];
    }
    if (match && !match.regex.test(value)) {
      return [false, match.message];
    }
    if (minLength && typeof value === 'string' && value.length < minLength) {
      return [false, `Min length ${minLength} characters!`];
    }
    if (maxLength && typeof value === 'string' && value.length > maxLength) {
      return [false, `Max length ${maxLength} characters!`];
    }

    return [true, null];
  }
  checkAgainstSchema(form: any) {
    const validationResults: any = {};
    let isValid = true;

    for (const name in this.schema) {
      if (Object.hasOwnProperty.call(this.schema, name)) {
        if (!Object.hasOwnProperty.call(form, name) || !form[name]) {
          validationResults[name] = `This is required field!`;
          isValid = false;
          continue;
        }

        const [valid, error] = this.check(name, form[name]);

        if (!valid) {
          validationResults[name] = error;
          isValid = false;
        }
      }
    }
    return [isValid, validationResults];
  }
}
