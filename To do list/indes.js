const btn = document.getElementById('ad');
btn.addEventListener('click', function(){

    var value1 = document.getElementById('data-input').value
    console.log(value1)
    if(value1 == ""){ 
        alert("Field Can't be Empty!")
    }
    
else{
    const main_element= document.createElement('div');
    main_element.className='main_div';

    const display_element=document.createElement('div');
    display_element.className='element_list';

    main_element.appendChild(display_element);
    
    const input_field = document.createElement('input');
    input_field.value=value1;
    input_field.id="input_field";
    input_field.setAttribute("readonly", "readonly");


    var Edit_btn = document.createElement("button");
    Edit_btn.innerHTML = "Edit";
    Edit_btn.id = "Edit_btn";

    


    console.log("hello2")
    const delete_btn = document.createElement('button');
    delete_btn.innerText="Delete";

    display_element.appendChild(input_field);
    display_element.appendChild(Edit_btn);
    display_element.appendChild(delete_btn);

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(main_element);

    Edit_btn.addEventListener('click', function(){

        if(Edit_btn.innerHTML == 'Edit'){
            Edit_btn.innerHTML='Save';
            input_field.readOnly = false;
        }
        else{
            Edit_btn.innerHTML='Edit';
            input_field.readOnly = true;
        }
    })
    delete_btn.addEventListener('click',function(){
        display_element.remove();
    })
}


})

// const Edit_btn = document.getElementById('Edit_btn');
// Edit_btn.addEventListener('click', function(){

//     console.log("hello")

//     if(Edit_btn.innerHTML == 'Edit'){
//         Edit_btn.innerHTML='Save';
//         document.getElementById("input_field").readOnly = false;
//         console.log("hello")
//     }
//     else{
//         Edit_btn.innerHTML='Edit';
//         document.getElementById("input_field").readOnly = true;
//     }
// })