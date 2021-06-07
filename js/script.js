//function to get data from server
function getData() {
    let myRequest = new XMLHttpRequest();
    let myKey = document.getElementById("inp").value;
    let myCards = document.getElementById("cards");
    let myInfo1 = document.querySelector("#info1 thead");
    let myInfo2 = document.querySelector("#info2 thead");
    let myInfo3 = document.querySelector("#info3 thead");
    let myInfo4 = document.querySelector("#info4 thead");

    myRequest.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            let myData = JSON.parse(this.response);
            let myAllData = myData.data;
            for(let i = 0; i < myAllData.length; i++){
                console.log(myAllData[i][myKey]);
                myCards.innerHTML += `
                    <div>
                        <img src="${myAllData[i].avatar}">
                        <h3>${myAllData[i].first_name + " " + myAllData[i].last_name}</h3>
                        <p><i class="fas fa-envelope"></i> ${myAllData[i].email}</p>
                        <h6> your ID : ${myAllData[i].id}</h6>
                    </div>
                `
                // if(myKey === "id"){
                //     myInfo1.innerHTML += `<tr><th>${myAllData[i][myKey]}</th></tr>`
                // }else if(myKey === "email"){
                //     myInfo2.innerHTML += `<tr><th>${myAllData[i][myKey]}</th></tr>`
                // }else if(myKey === "first_name"){
                //     myInfo3.innerHTML += `<tr><th>${myAllData[i][myKey]}</th></tr>`
                // }else if(myKey === "last_name"){
                //     myInfo4.innerHTML += `<tr><th>${myAllData[i][myKey]}</th></tr>`
                // }
            };
        }
    };
    myRequest.open("GET" , "https://reqres.in/api/users?page=2");
    myRequest.send();
};


{/* <td>${i}</td>
<td>${i}</td>
<td>${i}</td>
<td>${i}</td>
<td>${i}</td>
<td colspan="2"><i onclick="delProduct()" class="fa fa-trash"></i></td>*/}