import { startLoading, stopLoading } from "./loader.js"

import * as global from "./global.js"


 //Procedo a prelevare i valori dai campi del Form che mi serviranno per poter creare l'oggetto da inviare al server 
 //in modo che quest'ultimo si occupi di salvarlo nel database. 
 const productName = document.getElementById('productName')
 const productDescription = document.getElementById('productDescription')
 const productBrand = document.getElementById('productBrand')
 const productImgUrl = document.getElementById('productImgUrl')
 const productPrice = document.getElementById('productPrice')

const btnModifyProduct = document.getElementById('btnModifyProduct')
const btnHome = document.getElementById('btnHome')

// ricavo l'id passato tramite Url
const url = new URLSearchParams(location.search)
const  id = url.get('id')



async function fillForm(){

    startLoading()
   
    
    const response = await fetch(global.URL_END_POINT + id, {
        headers: {
        "Authorization": `Bearer ${global.URL_API_KEY}`,
        }
        })

    const dati = await response.json()

    stopLoading()
   
   
    //valorizziamo i campi del form con i dati ricavati dal DB
    productName.value = dati.name;
    productDescription.value = dati.description;
    productBrand.value = dati.brand;
    productImgUrl.value = dati.imageUrl;
    productPrice.value = dati.price;

}


//Richiamo la funzione che recupera l'ID del prodotto e tramite chiamata al server recupera i dati del corrispondente prodotto
fillForm()

btnModifyProduct.addEventListener('click',updateProduct)


async function updateProduct(e){
    e.preventDefault()

    const product = {
       

        name:productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImgUrl.value,
        price:Number(productPrice.value)
    }
    startLoading()
    
    const response = await fetch(global.URL_END_POINT + id, {

        method: 'PUT',
        headers: {
            "Authorization": `Bearer ${global.URL_API_KEY}`,
            'Content-Type': 'application/json'},
        body: JSON.stringify(product)
    })
    const dati = await response.json()
    stopLoading()
    
    global.displayModifySuccess(productName.value);
    
}

//Aggiungo la possibilità di tornare alla Home cliccando sul bottone
btnHome.addEventListener('click', () =>{
    //alert('torno')
    location.href = 'index_product.html';
} )

