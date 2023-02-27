
const handleSearch =()=>{
    const inputValue = document.getElementById('input-value').value;
    if(inputValue){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.title === 'No Definitions Found'){
                alert(data.message)
            }
            else{
                displayResult(data)
            }

        })
    }
    else{
        alert('empty input field')
    }
     
};

const displayResult =(data)=>{
    const parent = document.getElementById('audio-container');
    data[0].phonetics.forEach(element =>{
        const audio = document.createElement('audio');
        audio.src=element.audio;
        console.log(element);

        const button = document.createElement('button');
        button.innerHTML=`Play`;
        button.onclick=()=>{
            audio.play();
        };
        const container = document.createElement('div');
        container.appendChild(button);
        container.appendChild(audio);
        parent.appendChild(container);
    })
};




//APi-7(a)

const loadGithubUsers=()=>{
    fetch('https://api.github.com/users?per_page=10')
    .then(res=>res.json())
    .then(data=>displayUser(data))

};

const displayUser=(data)=>{
    const parent= document.getElementById('user-container');

    data.forEach(user=>{
        fetch(user.followers_url)
    .then(res=>res.json())
    .then(data=>{
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML=`
        <img class="card-img" src=${user.avatar_url} alt="">
        <h2>${user.login}</h2>
        <div>Followers:

        <img class="card-img1" src=${data[0].avatar_url} alt="">
        <img class="card-img1" src=${data[1].avatar_url} alt="">

        
        </div>
        
        `;
        parent.appendChild(div);
    })

    })

    

}