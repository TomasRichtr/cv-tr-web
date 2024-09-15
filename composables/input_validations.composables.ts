import { isNumber, isNaN } from 'lodash-es';

class InputValidations {
  public validateLength(message: string, count: number, val?: string) {
    if (val && val.length > count) return message;

    return true;
  };

  public validateRequired(message: string, val?: string) {
    return !!val || message;
  };

  public validateAgainstRegExp(message: string, format: RegExp, val?: string) {
    if (val && !format?.test(val)) return message;

    return true;
  };

  public validateUrl(message: string, val?: string) {
    const regex = /^(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]$/i;
    if (val && !regex.test(val)) return message;
    return true;
  };

  public validateNumber(message: string, val?: string | null) {
    if (val && (!isNumber(+val) || isNaN(+val))) return message;

    return true;
  };

  public validateFileName(message: string, val?: string | null) {
    const regex = /^(?!\.)(?!^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$))[^\\/:*?"<>|]+$/i;
    if (!val || !regex.test(val)) {
      return message;
    }

    return true;
  };

  public validatePhone(message: string, val?: string) {
    if (val && !/^[0-9-]{7,}$/.test(val)) return message;

    return true;
  };

  public validateEmail(message: string, val?: string) {
    if (val && !/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(val)) return message;

    return true;
  };
}

export default new InputValidations();
