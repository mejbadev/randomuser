const loadRandomUser = async ()=>{
    const url = `https://randomuser.me/api/`;
    const res = await fetch(url);
    const data = await res.json();
    displayUser(data.results[0]);

}

const displayUser = (data) =>{
    const imageField = document.getElementById('image-div');
    imageField.innerHTML=`<img id='image' class="d-block img-fluid m-auto rounded-circle border border-dark" src="${data.picture.large}"  alt="">`;
    let headingFiled = document.getElementById('heading');
    let info = document.getElementById('info');
    document.getElementById('babul-vai').addEventListener('mouseover', (e)=>{
        if(e.target.tagName.toLowerCase() == 'i'){
           if(e.srcElement.id == 'user'){
                headingFiled.innerText = 'Hello! I am :';
                info.innerText = `${data.name.title} ${data.name.first} ${data.name.last}`;       
           }
           if(e.srcElement.id == 'envelope'){
            headingFiled.innerText = 'My email address:';
            info.innerText = `${data.email}`;       
            }
            if(e.srcElement.id == 'calender'){
                headingFiled.innerText = ' My birth date:';
                info.innerText = `${data.dob.date.slice(0,10)}`;       
           }
           if(e.srcElement.id == 'map'){
            headingFiled.innerText = 'My Address:';
            info.innerText = `${data.location.city}, ${data.location.country}`;       
            }
            if(e.srcElement.id == 'phone'){
                headingFiled.innerText = 'My Name is :';
                info.innerText = `${data.name.title} ${data.name.first} ${data.name.last}`;       
           }
           if(e.srcElement.id == 'unlock'){
            headingFiled.innerText = 'password :';
            info.innerText = `${data.login.password}`;       
       }
            
        }
    } )
}

