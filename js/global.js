export const IS_ADMIN = 1;  // da gestire il valore tramite pagina di accesso con user e pwd di amministratore

export let IS_CONFIRM_DELETE = false;


export const URL_END_POINT = "https://striveschool-api.herokuapp.com/api/product/";
export const URL_API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQzNTEwNzU0YmIwMjAwMTViNmY1OGIiLCJpYXQiOjE3MjUxMjQ4NzEsImV4cCI6MTcyNjMzNDQ3MX0.wHNt56vy9OztiRgfKjkNPEP4d4OmX9eO36miO4Ft72A";



//creo i testi globali che mi serviranno nelle varie pagine del sito
export const TXT_VIEW = "Visualizza";
export const TXT_MODIFY = "Modifica";
export const TXT_DELETE = "Elimina";

export const MSG_OK_MODIFY = 'Prodotto aggiornato con successo';

export const MSG_LOAD_ERROR = "Attenzione si è verificato un errore durante il caricamento della pagina, riprovare";

export const MSG_CONFIRM_DELETE = 'Sei sicuro di voler eliminare il prodotto?';


/*
fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQzNTEwNzU0YmIwMjAwMTViNmY1OGIiLCJpYXQiOjE3MjUxMjQ4NzEsImV4cCI6MTcyNjMzNDQ3MX0.wHNt56vy9OztiRgfKjkNPEP4d4OmX9eO36miO4Ft72A"
    }
    })
*/
export function displayCreateSuccess(productName){
    Swal.fire({
        title: "Fatto!",
        text: `Prodotto: "${productName}" creato con successo!`,
        icon: "success"
      }).then(()=>{
         return true;
          

        })
}


export function displayModifySuccess(productName){
    Swal.fire({
        title: "Fatto!",
        text: `Prodotto: "${productName}" modificato con successo!`,
        icon: "success"
      }).then(()=>{
        
        return true;
     
     })
}


export function displayConfirmDeleteProduct(){
    Swal.fire({
        title: "Sei sicuro?",
        text: "Se prosegui non è possibile recuperare il prodotto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, elimina il prodotto!"
      }).then((result) => {
        if (result.isConfirmed) {
           
            return true;
          
        }
        else return false;
      });
}

export function displayDeleteSuccess(){
    Swal.fire({
        title: "Cancellato!",
        text: "Il prodotto è stato eliminato.",
        icon: "success"
      });
}

export function displayErrorMessage(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Qualcosa è andato storto!",
        footer: '<a href="index_product.html">Torna alla Home</a>'
      });

}