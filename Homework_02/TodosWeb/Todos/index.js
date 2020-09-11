document.getElementById("btnSubmit").addEventListener("click",()=>{
    window.location.href = "https://register-e526e.web.app/"

})


const container=document.querySelector('.container')
const input1=document.querySelector('input')
class item {
    constructor(itemName){
        this.createDiv(itemName)
    }

    createDiv(itemName){
        let input=document.createElement('input')
        input.value=itemName;
        input.disabled=true;
        input.classList.add('item-input');
        input.type="text"

        let itemBox=document.createElement('div')
        itemBox.classList.add('item')

        let removeBtn=document.createElement('button')
        removeBtn.innerHTML="REMOVE"
        removeBtn.classList.add('removeButton')

        container.appendChild(itemBox)
        itemBox.appendChild(input)
        itemBox.appendChild(removeBtn)
   
        removeBtn.addEventListener("click",()=> this.remove(itemBox))
    }
        remove(item){
            container.removeChild(item)
        }
    }
 
    function check(){
        if(input1.value != null){
            new item(input1.value)
        }
    }       

   

    document.getElementById("input-todo").addEventListener("keyup",(e)=>{
    if(e.key==='Enter'){
        check()  
    }
})
