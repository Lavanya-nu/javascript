const mainDiv=document.getElementById('mlib')
const mlist=[
    {
        "Director": "shekar kamula",
        "country": "India",
        "imageLink": "images/fidaa.jpg",
        "language": "Telugu",
        "link": "https://www.aha.video/player/movie/fidaa\n",
        "title": "Fidaa",
        
      },
      {
        "Director": "Rajamouli",
        "country": "India",
        "imageLink": "images/sye.jpg",
        "language": "Telugu",
        "link": "https://www.zee5.com/movies/details/aar-paar-the-judgement/0-0-movie_1882884031?utm_source=google_web&utm_medium=watchaction&utm_campaign=google_watch&utm_content=aar_paar_-_the_judgement\n",
        "title": "Sye",
        
      },
      {
        "Director": "Boyapati Srinu ",
        "country": "India",
        "imageLink": "images/sarrainodu.jpg",
        "language": "Telugu",
        "link": "https://www.hotstar.com/in/movies/himmat/1000236012/watch?utm_source=gwa\n",
        "title": "Sarrainodu",
        
      },
      {
        "Director": "Hanu raghavapudi",
        "country": "India",
        "imageLink": "images/Sita ramam.jpg",
        "language": "Telugu",
        "link": "https://www.google.com/search?q=sita+ramam+full+movie&oq=sita+ra&gs_lcrp=EgZjaHJvbWUqDwgDEAAYQxixAxiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMgwIARAuGCcYgAQYigUyBggCEEUYOTIPCAMQABhDGLEDGIAEGIoFMgwIBBAAGEMYgAQYigUyDwgFEAAYQxixAxiABBiKBTINCAYQABiDARixAxiABDIOCAcQABgKGEMYgAQYigUyBwgIEC4YgAQyBwgJEAAYgATSAQk3NDE1ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8\n",
        "title": "Sita Ramam",
        
      },
      {
        "Director": "vidhu vinod chopra ",
        "country": "India",
        "imageLink": "images/twelve.jpg",
        "language": "Hindi",
        "link": "https://www.google.com/search?q=12th+fail&source=lmns&bih=695&biw=1536&hl=en&sa=X&ved=2ahUKEwjhi4O29MuDAxUhY2wGHQsfC2sQ0pQJKAB6BAgBEAI\n",
        "title": "12th Fail",
        
      },
      {
        "Director": "shouryuv ",
        "country": "India",
        "imageLink": "images/Hi nanna.jpg",
        "language": "Telugu",
        "link": "https://www.google.com/search?q=hi+nanna&sca_esv=596393425&bih=695&biw=1536&hl=en&sxsrf=AM9HkKmhS-8f5juS7nxm4YN6DeScbeu8sw%3A1704652465002&ei=sO6aZY_uPJr04-EP0-OV8A4&gs_ssp=eJzj4tVP1zc0zC4ytygwSzM1YPTiyMhUyEvMy0sEAFqMB0w&oq=hi+n&gs_lp=Egxnd3Mtd2l6LXNlcnAiBGhpIG4qAggAMgoQLhiABBiKBRgnMgQQIxgnMhAQABiABBiKBRhDGLEDGIMBMgsQABiABBixAxiDATIQEAAYgAQYigUYQxixAxiDATIOEAAYgAQYigUYsQMYgwEyBRAAGIAEMgsQABiABBixAxiDATIOEAAYgAQYigUYsQMYgwEyCxAAGIAEGLEDGIMBMiYQLhiABBiKBRiXBRjcBBjeBBjgBBj0AxjxAxj1Axj2Axj3A9gBAkjwIlAAWMwZcAJ4AZABAJgBoQGgAZcGqgEDMC41uAEByAEA-AEBqAISwgIHEC4Y6gIYJ8ICBxAjGOoCGCfCAhYQLhiABBiKBRhDGMgDGOoCGLQC2AEBwgIKECMYgAQYigUYJ8ICChAuGIAEGIoFGEPCAhEQLhiABBiKBRixAxiDARjUAsICCBAAGIAEGLEDwgILEC4YgAQYsQMYgwHCAggQLhiABBixA8ICFxAuGIAEGIoFGJcFGNwEGN4EGOAE2AECwgINEAAYgAQYigUYQxixA8ICChAAGIAEGIoFGEPCAgoQABiABBgUGIcCwgINEAAYgAQYChixAxiDAcICCxAuGIAEGMcBGNEDwgIHECMYsQIYJ8ICEBAuGEMYgwEYsQMYgAQYigXCAhAQABiABBiKBRgKGLEDGIMBwgIHEAAYgAQYCsICHxAuGEMYgwEYsQMYgAQYigUYlwUY3AQY3gQY4ATYAQLiAwQYACBBiAYBugYGCAEQARgIugYGCAIQARgU&sclient=gws-wiz-serp\n",
        "title": "Hi nanna",
        
      },
      {
        "Director": "Remo",
        "country": "India",
        "imageLink": "images/remo.jpg",
        "language": "Telugu",
        "link": "https://www.hotstar.com/in/movies/remo/1000187193/watch?utm_source=gwa\n",
        "title": "Remo",
        
      },
      
]
mlist.forEach(function (movie)
{
  console.log(movie.title);
  const MovieDiv=document.createElement('div')
  const img=document.createElement('img')
  img.src=movie.imageLink
  img.alt=movie.title
  const title=document.createElement('h3')
  title.textContent=movie.title
  const button=document.createElement('button')
  const anchor=document.createElement('a')
  anchor.href=movie.link;
  anchor.target="_blank"
  anchor.textContent="Watch"
  button.appendChild(anchor)
  MovieDiv.appendChild(img)
  MovieDiv.appendChild(title)
  MovieDiv.appendChild(button)
  MovieDiv.classList.add('movie')
  mainDiv.appendChild(MovieDiv)
})