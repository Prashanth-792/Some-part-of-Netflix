let moviesList = [
    {
        name:"Virupaksha",
        poster:"https://timesofindia.indiatimes.com/photo/99400955.cms",
        rating:8.5,
        actors:'SaidaramTej,Samyuktha Menon'

    },
    {
        name: "Bahubali",
        poster:"https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/184827/baahubali.jpg",
        rating: 9.0,
        actors:'Prabhas,Thamanna'
        
    },
    {
        name:'Adipurush',
        poster:"https://www.filmibeat.com/fanimg/movie/19457/adipurush-photos-images-2023040657196500.jpg" ,
        rating:8.8,
        actors:'Prabhas,Krithi Sanon  '
    },
    {
        name:'Pathaan',
        poster:"https://m.media-amazon.com/images/M/MV5BNDUyODIzZGUtYmU3OS00MGZlLTgwZGItOTQxOWMwZDliOWRmXkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_.jpg" ,
        rating:8.5,
        actors:'Sharuk Khan,Deepika Padukon'  
    },
    {
        name:'RRR',
        poster:"https://i.redd.it/8g3qkrzmno881.jpg",
        rating:9.5,
        actors:'RamCharan,JrNTR,Alia Bhat'
    },
    {
        name:'Avathar',
        poster:"https://m.media-amazon.com/images/I/91vwVHABnZL._AC_UF1000,1000_QL80_.jpg" ,
        rating:8.5 ,
        actors: 'Sam Worthington,Zoe Saldana'
    },
    {
        name:'KGF Chapter-1',
        poster:"https://wallpapercave.com/wp/wp4019377.jpg" ,
        rating:8.8 ,
        actors: 'Yash,Srinidhi '
    },
    {
        name:'bahubali-2',
        poster:"https://media5.bollywoodhungama.in/wp-content/uploads/2017/03/Bahubali-2-The-Conclusion.jpg" ,
        rating:9.5,
        actors:'Prabhas,Anuska '  
    },
    {
        name:'LEO',
        poster:"https://static.toiimg.com/photo/103969712.cms" ,
        rating:8.8 ,
        actors:'Vijay,Thrisha'
    },
    {
        name:'KGF Chapter-2',
        poster:"https://editzstock.com/wp-content/uploads/2022/04/Kgf-chapter-2-editing-background-5.jpg" ,
        rating:9.0,
        actors: 'Yash,Srinidhi'  
    }
    
]

function searchMovie()
{
    let movieName= document.getElementById('search').value;
    if(movieName!=='')
    {
        let result=moviesList.filter(function(movie)
                   {
                    return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    
                   })
        display(result);
    }
    else{
        display(moviesList);
    }
}




function display(data){
    //  let movieDiv = document.createElement("div");
    //  movieDiv.classList.add('movie')

    //  let overlayDiv = document.createElement('div');
    //  overlayDiv.classList.add('overlay')
    //  movieDiv.appendChild(overlayDiv);


    //  let vidioDiv = document.createElement("div");
    //  vidioDiv.classList.add("vidio")
    //  overlayDiv.appendChild(vidioDiv)
     
    //  let detailsDiv = document.createElement('div')
    //  detailsDiv.classList.add("details")
    //  overlayDiv.appendChild(detailsDiv)

    //  let movieName = document.createElement("h1")
    //  movieName.innerHTML="viru" ;
    //  let movieRating = document.createElement("h2")
    //  movieRating.innerHTML="8.5";

    //  let imgDiv = document.createElement("img")
    //  imgDiv.classList.add('img')
    //  movieDiv.appendChild(imgDiv)
    //  imgDiv.src="https://timesofindia.indiatimes.com/photo/99400955.cms";
     
    document.getElementById('movies').innerHTML='';
    let htmlString = ``;
     
    for (i=0;i<data.length;i++){

        htmlString = htmlString + `
            <div class="movie">
                <div class="overlay">
                    <div class="vidio"></div>
                    <div class="details">
                        <h1>${data[i].name}</h1>
                        <h2>${data[i].rating}</h2> 
                        <h4>${data[i].actors}</h4>                    
                    </div>
                </div>
                <img class="img" src="${data[i].poster}" alt="poster">
            </div>
        `


    }
         
    document.getElementById('movies').innerHTML=htmlString;
       
   
    

 }
     



    


display(moviesList);