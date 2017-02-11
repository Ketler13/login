import { LOAD_ITEM_LIST, LOAD_COMMENTS_BY_ITEM_ID, CHECK_USER_DATA, SAVE_NEW_USER,
        ADD_NEW_COMMENT } from '../constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    console.log(rest)
    if (!callAPI) return next(action)
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

        case ADD_NEW_COMMENT:
            fetch(callAPI, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${rest.payload.token}`
                },
                body: JSON.stringify({
                    rate: rest.payload.rate,
                    text: rest.payload.text,
                    email: rest.payload.email,
                    created_at: rest.payload.created_at
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
