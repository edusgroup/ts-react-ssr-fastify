import * as React from 'react'
import ReactDOMServer from 'react-dom/server'

// import {getCalendar} from 'calen'

export function getData () {
  return ReactDOMServer.renderToStaticNodeStream(<body>
  <input type="button" value="click me2" onClick={() => console.log('dddd')}/>
  </body>)

//   console.log(getCalendar(new Date(2012, 8)))

}
