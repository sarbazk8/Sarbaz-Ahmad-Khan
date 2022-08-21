const btn = document.getElementById('btn');
const hname = document.getElementById('hname');
const hdisc = document.getElementById('hdisc');
btn.addEventListener('click',function(){
    const name = document.getElementById('Name').value;
    const disc = document.getElementById('discription').value;

    if((name =="")||(disc=="")){
        alert("Fields Cant Be Empty!!")
    }
    else{

        console.log("inside the else")
        const main_div = document.createElement('div');

        const newh1 = document.createElement("h1");
        newh1.className="hedding"
        newh1.innerText = name;

        const newh3 = document.createElement("h3");
        newh3.className="newdisc"
        newh3.innerText = disc;


        main_div.appendChild(newh1);
        main_div.appendChild(newh3);

        const Name = document.getElementById('Name');
        const Disc = document.getElementById('discription');

        hname.remove();
        hdisc.remove();
        btn.remove();
        Name.remove();
        Disc.remove();

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(main_div);


    }



})