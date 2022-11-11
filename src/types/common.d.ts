declare type FuncVoid<P = any> = (data: P) => void;
declare type Func<P = any, R = any> = (data: P) => R;
declare type FuncWithoutParams<R = any> = () => R;
declare type FuncVoidWithoutParams = () => void;
declare type FuncPromise<D = any, R = any> = (params: D) => Promise<R>;
declare type FuncPromiseWithoutParams<R = any> = () => Promise<R>;
declare type IFormikSubmit<V> = (values: V, actions: FormikHelpers<V>) => void;
declare type IFuncPromiseLogin<R = any> = (email: string, password: string) => Promise<R>;
declare type IFuncVoidLogin = (email: string, password: string) => void;
