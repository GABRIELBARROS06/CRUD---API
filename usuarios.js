'use strict'

async function listarUsuarios () {
    //onde será puxada a api
    const url = 'http://10.107.140.2:8080/usuarios/'
    //resposta da api 
    const response = fetch (url)
    const data = await response.json();
    console.log(data)
    return data
};

async function atualizarUsuario (usuario) {

    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(usuario)
}
const response = await fetch(url, options)
console.log(response.ok)
return response.ok

};

async function deletarUsuario (id) {
    const url =  `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

async function cadastrarUsuario (usuario) {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch (url, options)
    console.log(response.ok)
    return response.ok
}

/*const usuarioAtualizado = {
    id: 23,
    nome: 'Vitor 123',
    email: 'vitor123@gmail.com'
}*/

const novoUsuario = {
    nome: 'Gabriel',
    email: 'bieldbg56@gmail.com'
}

cadastrarUsuario(novoUsuario)

listarUsuarios()