import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key='relativeList'>
                <li key='relativeListItem1'> relativeListItem1</li>
                <li key='relativeListItem2'> relativeListItem2</li>
                <li key='relativeListItem3'> relativeListItem3</li>
               </ol>
    </div>
  )
}

export default App
