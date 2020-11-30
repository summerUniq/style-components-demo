import React, { Component } from 'react'

interface Human {
    name: string
    age: typeof Age
    secondLanguage: string
    lover?: Human
}

const Jessica: Human = {
    name: 'jsc',
    age: 18,
    secondLanguage: 'en',
    lover: {
        name: 'jack',
        age: 16,
        secondLanguage: 'en',
    }
}

const Jack: Optional<Human, 'secondLanguage'> = {
    name: 'Jack',
    age: 18,
}
Jack.secondLanguage = 'japanese'

type ParamType<T> = T extends (param: infer P) => void? P : T

type A = Pick<Human, 'name'>

type B = Partial<Human>

type C = Required<Human>

type D = Required_K<Human, 'name'>

const getType = () => {
    return 123
}

type E = Return<typeof getType>

export default class Test extends Component {


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
