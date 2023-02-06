const CmsApi = () => {
    const url = 'http://localhost:3000/api/v1'

    return {
        login (email, password) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
        },
        getFuncionalidades () {
            return fetch(`${url}/funcionalidades`)
        },
        getSobre () {
            return fetch(`${url}/sobre`)
        },
        patchSobre (sobre) {
            return fetch(`${url}/sobre`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                },
                body: JSON.stringify(sobre)
            })
        },
        postFuncionalidade (funcionalidade) {
            return fetch(`${url}/funcionalidades`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        patchFuncionalidade (funcionalidade) {
            return fetch(`${url}/funcionalidades/${funcionalidade.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        deleteFuncionalidade (id) {
            return fetch(`${url}/funcionalidades/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            })
        }
    }
}

export default CmsApi