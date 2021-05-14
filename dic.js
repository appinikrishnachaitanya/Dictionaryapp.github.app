
let input = document.querySelector('#input');
let searchbin = document.querySelector('#search');
let apikey ="1bf87621-e462-48a9-80cd-4111a7c6c926";
let notFound=document.querySelector('.no_content');
let contentShow=document.querySelector('.content_show');
let contentDef=document.querySelector('.content_def');
searchbin.addEventListener('click',function(e){
  
    e.preventDefault();
    
    notFound.innerText="";
    contentShow.innerText="";
    contentDef.innerText="";


    // Get the input

    var word=String(input.value);
    
    //call api
    if(word=="")
    {
        alert("Word is required");
    }
    else
    {
               getData(word)
    }

    
    
});

 async  function getData(word)
{
    const response = await  fetch(`https://www.dictionaryapi.com/api/v3/references/sd2/json/${word}?key=${apikey}`)
     
    const data =  await response.json();
    console.log(data);

    if(!data.length)
    {
        notFound.innerText="No Data Found";

        return
    }

    if( typeof data[0] == 'string')
    {
        let heading = document.createElement('h2');
        heading.innerText="Did you Mean ?";
        notFound.appendChild(heading);
        
        data.forEach( (element) => {
            let suggestion=document.createElement('span');
            suggestion.classList.add("suggested");
            suggestion.innerText=element;
            notFound.appendChild(suggestion);
        })
        return;
    }

   

        const definition = data[0].shortdef[0];
        contentDef.innerText=definition;


    





}

