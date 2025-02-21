import HeavyComponent from '@/components/HeavyComponent'
import React from 'react'

function Home() {
    return (
        <div>
            <h2>WithOut Lazy Loading</h2>
            <button onClick={() => setShow(true)}>Load Component</button>
            <HeavyComponent />
        </div>
    )
}

export default Home