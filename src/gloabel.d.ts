declare var Age:number

interface People {
    age: typeof Age
}

declare interface Animal<T> {
    type: T
}

type TEST<T, K extends keyof T> = {
    [P in K]: T[P]
}

// 去除指定的key
type Exclude<T, U> = T extends U ? never : T

// 获取指定key之外的所有类型
declare type Omit< T, K extends keyof T> = {
    [P in Exclude<keyof T, K>]: T[P]
}

declare type Optional<T, K extends keyof T> = {
    [P in K]?: T[K]
} & Omit<T, K>

// PICK 获取指定字段类型
declare type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// PARTIAL  获取一部分类型
declare type Partial<T> = {
    [K in keyof T]?: T[K]
}
// REQUIRED 必选  -?
declare type Required<T> = {
    [P in keyof T]-?: T[P]
}

// REQUIRED_K
declare type Required_K <T, K extends keyof T> = {
    [P in K]-?: T[P]
} & Omit<T, K>

// READONLY_RECURSIVE 将字段变为只读
declare type Readonly_Recursive<T> = {
    readonly [K in keyof T]: T[K] extends {[index: string]: any}? Readonly_Recursive<T[P]> : T[P]
}

// RETURN 获取函数返回值参数
declare type Return<T> = T extends (param:any) => infer P ? P : never

// CONSTRUCTOR_P 获取构造函数的参数类型


