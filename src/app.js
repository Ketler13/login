import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/AppContainer'
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.render(<AppContainer />, document.getElementById('container'))


// function makeReq() {
//     fetch('/api/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: 'rafik',
//         password: '123456',
//       })
//     }).then(function(response) {
//       response.status     //=> number 100–599
//       response.statusText //=> String
//       response.headers    //=> Headers
//       response.url        //=> String
//
//       return response.text()
//     }, function(error) {
//       error.message //=> String
//       return error
//   }).then(function(msg) {
//       console.log(msg)
//   })
// }
// makeReq()
