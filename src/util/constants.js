const URL = 'http://itecordurango.com/subdominios/api_kityplancho/api/'

export const getClients = () => {
  return fetch(`${URL}clientes`)
    .then(response => response.json())
   
}