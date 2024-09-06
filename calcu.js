let items = []
let totalPrice = 0
let discountPrice = 0

function addItems(itemName,price){
  
            items.push(itemName)
            totalPrice = totalPrice + price
            let total = document.getElementById('total-price')
            total.textContent = totalPrice



        //  if( totalPrice >= 100){
           if(items.length >= 4){
            const cupon = document.getElementById('cupon-input')
            const cValue = cupon.value
            if(cValue === 'SELL200'){
                const applyBtn = document.getElementById('apply-btn')
                applyBtn.addEventListener('click',function(){
                    let diss = document.getElementById('discount-price')
                    discountPrice =  totalPrice - totalPrice*.15
                    diss.textContent = discountPrice
                })
            }
           }
           

           const list = document.getElementById('list')
           list.innerHTML = ''
         for(let i = 0 ; i < items.length ; i++){
            const item = document.createElement('li')
            item.innerHTML = `
            
            <p>${items[i]}</p>
            `  
            list.appendChild(item )
         }

          
         }
    // }
         
