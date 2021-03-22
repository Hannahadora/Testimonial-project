(function(){
    const customerImage = document.querySelector('#customerImage')
    const customerName = document.querySelector('#customerName')
    const customerNote = document.querySelector('#customerNote')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    //Create a new customer using a customer constructor
    
    //Customer Constructor
    function Customer(img, name, note) {
        this.img = img
        this.name = name
        this.note = note
    }

    //Create new customer using the constructor function

    function createCustomer(img, name, note) {
       
        let customer = new Customer(img, name, note)

        customers.push(customer)
    }

    
    createCustomer('https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Jesse Jay', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer('https://images.pexels.com/photos/7204239/pexels-photo-7204239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer('https://images.pexels.com/photos/3122730/pexels-photo-3122730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer('https://images.pexels.com/photos/681637/pexels-photo-681637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer('https://images.pexels.com/photos/5561352/pexels-photo-5561352.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.innerText = customers[index].name
               customerNote.innerText = customers[index].note
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.innerText = customers[index].name
                customerNote.innerText = customers[index].note
             }
        })
    })
    
})()