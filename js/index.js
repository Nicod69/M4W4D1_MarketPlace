import { startLoading, stopLoading } from "./loader.js"
import * as global from "./global.js"

let is_confirm_delete = false;

let products = {}


function displayedConfirmDeleteProduct(idProduct, col){
  //alert("function displayed idProduct vale: " + idProduct)
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
         //da  qui 
         startLoading()
              
         fetch(`${global.URL_END_POINT}${idProduct}` ,{  
           method: 'DELETE',
           headers:{
             "Authorization": `Bearer ${global.URL_API_KEY}`,
             'Content-Type': 'Application/json'
           }
         })
         .then(res => res.json())
         .then(() =>{
           //eliminazione avvenuta con successo
           stopLoading()
           col.remove()
           global.displayDeleteSuccess();
           
         })


         // a qui
          
        
      }
      else return false;
    });
}



async function call(){
    startLoading()

    try{
      

      const response = await fetch(global.URL_END_POINT, {
        headers: {
        "Authorization": `Bearer ${global.URL_API_KEY}`
        }
        })

      
      products = await response.json();
      //console.log(products)
      //console.log(procucts.id);

      
    }catch(err){
      //manage error
      console.log(global.MSG_LOAD_ERROR);  // "Attenzione si è verificato un errore durante il caricamento della pagina, riprovare
      global.displayErrorMessage();
      stopLoading()
    }
    const target = document.getElementById('target');
    
    setTimeout(function(){
      
      stopLoading()
    
    
      products.forEach(p => {
          
          const col = document.createElement('div');
          const card = document.createElement('div');
          const cardBody = document.createElement('div');
          const title = document.createElement('h5');
          const cardImg = document.createElement('img');
          const a = document.createElement('a')
          const deleteButton = document.createElement('button')
          const editButton = document.createElement('a')

          col.classList.add('col-6')
          card.classList.add('card')
          cardImg.classList.add('card-img-top');
          cardBody.classList.add('card-body')
          title.classList.add('card-title');
          
          
          cardImg.src = p.imageUrl;
          cardImg.alt = p.description;
          //console.log("IMAGE URL="+p.imageUrl)

          a.classList.add('btn','btn-primary')
          deleteButton.classList.add('btn','btn-danger', 'ms-2')
          editButton.classList.add('btn','btn-warning', 'ms-2')
          

          title.textContent = p.name;

          a.innerText = global.TXT_VIEW;  // 'Visualizza';
          a.href = 'product_detail.html?id=' + p._id
          deleteButton.innerText = global.TXT_DELETE;  //'Elimina'
          editButton.href = 'modify_product.html?id=' + p._id
          editButton.innerText = global.TXT_MODIFY;  //'Modifica'

          
          deleteButton.addEventListener('click',function(){
            

            is_confirm_delete = displayedConfirmDeleteProduct(p._id, col); //confirm('Sei sicuro di voler eliminare il prodotto?')
            //alert("riga 99 " + is_confirm_delete)

            /*
            if(is_confirm_delete){

              startLoading()
              
              fetch(`${global.URL_END_POINT}${p.id}` ,{  
                method: 'DELETE',
                headers:{
                  "Authorization": `Bearer ${global.URL_API_KEY}`,
                  'Content-Type': 'Application/json'
                }
              })
              .then(res => res.json())
              .then(() =>{
                //eliminazione avvenuta con successo
                stopLoading()
                col.remove()
                global.displayDeleteSuccess();
                global.IS_CONFIRM_DELETE = false;
              })
              
            }
           */ 
          })


          if (global.IS_ADMIN){
            cardBody.append(title,a,editButton,deleteButton)
            
          } 
          else{
            cardBody.append(title,a)
          } 
          card.append(cardImg,cardBody)

          col.append(card)

          target.append(col)

      });
    
    
    }, 2000)
    
}

call()


