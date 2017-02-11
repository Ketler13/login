import { LOAD_ITEM_LIST, LOAD_COMMENTS_BY_ITEM_ID, CHECK_USER_DATA, SAVE_NEW_USER } from '../constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    switch(type) {
        case LOAD_ITEM_LIST:
            fetch(callAPI, {
              method: 'GET'
            }).then(function(response) {
              return response.text()
            }, function(error) {
              return error
            }).then(function(msg) {
              const response = JSON.parse(msg)
              next({...rest, type, response})
            })
            break

        case LOAD_COMMENTS_BY_ITEM_ID:
            fetch(callAPI, {
              method: 'GET'
            }).then(function(response) {
              return response.text()
            }, function(error) {
              return error
            }).then(function(msg) {
              const response = JSON.parse(msg)
              next({...rest, type, response})
            })
            break

        case CHECK_USER_DATA:
            fetch(callAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: rest.payload.login,
                    password: rest.payload.password,
                })
            }).then(function(response) {
                return response.text()
            }, function(error) {
                return error
            }).then(function(msg) {
                const response = JSON.parse(msg)
                next({...rest, type, response})
            })
            break

        case SAVE_NEW_USER:
            fetch(callAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: rest.payload.login,
                    password: rest.payload.password,
                })
            }).then(function(response) {
                return response.text()
            }, function(error) {
                return error
            }).then(function(msg) {
                const response = JSON.parse(msg)
                next({...rest, type, response})
            })
            break
    }

}

// function makeReq() {
//
// }
// makeReq()
