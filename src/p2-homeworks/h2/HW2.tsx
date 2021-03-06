import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // ok *** need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} //ok ** need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ //ok// need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & y', priority: 'middle'},
]

// // pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    let affairsToTodoList = affairs
    if (filter === 'all') return affairsToTodoList
    if (filter === 'high') {
        affairsToTodoList = affairs.filter(a => a.priority === 'high')
        return affairsToTodoList
    }
    if (filter === 'middle') {
        affairsToTodoList = affairs.filter(a => a.priority === 'middle')
        return affairsToTodoList
    }
    if (filter === 'low') {
        affairsToTodoList = affairs.filter(a => a.priority === 'low')
        return affairsToTodoList
    } else return []// need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
    affairs = affairs.filter(a => a._id !== _id)
    return affairs// need to fix
}
// export const changeFilter=(value)=>{
//     return value
// }

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // ok *** need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*?????? ?????????????? ????????????????????, ???????? ??????????????????*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
