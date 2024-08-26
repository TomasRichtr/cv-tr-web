class DataUtils {
  convertEnumToObj<T extends object>(enumType: T): { [key in keyof T]: T[key] } {
    const obj = {} as { [key in keyof T]: T[key] };
    for (const [key, value] of Object.entries(enumType) as [keyof T, T[keyof T]][]) {
      obj[key] = value;
    }
    console.log(obj);
    return obj;
  }
}

export default new DataUtils();
