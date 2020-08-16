import React, {useState} from 'react'

const Search = ( {getQuery} ) => {
    
    const [text, setText] = useState('')
    
    const onSearchInput = (q) =>
    {
        setText(q)
        getQuery(q)
    }

    return (
        <section className = 'search'>
            <form>
                <input 
                    type="text"
                    placeholder="Search Characters"
                    value={text}
                    onChange={(e) => onSearchInput(e.target.value)}
                    autoFocus></input>
            </form>
        </section>
    )
}

export default Search
