export function MaxReturn(max: number) {
  return (
    target: Object,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<
      (...args: any) => Promise<number> | number
    >,
  ) => {
    const method = descriptor.value!;
    descriptor.value = async function (...args) {
      const result = await method.apply(this, args);
      return result > max ? max : result;
    };
  };
}
