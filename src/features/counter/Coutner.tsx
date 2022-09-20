import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'
import { useAppSelector } from '../../app/hooks'

export function Counter() {
    const state = useAppSelector(selectCount)

    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{state.value}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}