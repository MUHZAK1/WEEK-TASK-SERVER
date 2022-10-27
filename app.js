// let name = ''

// if(name != ""){
//     console.log(`Name =  ${name}`);
// } else{
//     console.log(`Name is empty`);
// }

const http = require('http');
const fs = require('fs');
const {name,sayHello} = require('./others/demo')


let server =  http.createServer((req,res) =>{

    // res.end(`Your current url is ${req.url}`)

    // if(req.url === '/'){
    //     res.end(`<h1>Welcome to Home Page </h1>`)
    // } else if(req.url === '/about'){
    //     res.end(`<h1>Welcome to About Page </h1>`)
    // }

    
    if(req.url === '/'){
        const homePage = fs.readFileSync('index.html')
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.write(homePage)
         res.end()
    }

    if(req.url === '/images/muhsinah.jpg'){
        const homeImage = fs.readFileSync('images/muhsinah.jpg')
        res.writeHead(200,{'Content-Type' : 'image/jpeg'})
        res.write(homeImage)
        res.end()
    }
if(req.url === '/style.css'){
   const homeStyle = fs.readFileSync('style/style.css') 
   res.writeHead(200,{'content-type' :'text/css'})
   res.write(homeStyle)
   res.end()
}
if(req.url === '/about.html'){
const aboutPage = fs.readFileSync('about.html')
res.writeHead(200,{'content-type' : 'text/html'})
res.write(aboutPage)
res.end()
}
if(req.url === '/contact.html'){
    const contactPage = fs.readFileSync('contact.html')
    res.writeHead(200,{'content-type' : 'text.html'})
    res.write(contactPage)
    res.end()
}

if(req.url === '/home'){
    const homePage = fs.readFileSync('index.html')
    res.writeHead(200,{'Content-Type' : 'text/html'})
    res.write(homePage)
     res.end()
}


    
    
   

    
   
   
    // fs.readFileSync('home.html' , function(err, data){
    //     if(err){
    //         console.log(err);
    //         return
    //     }

    //     // res.writeHead(200,{'Content-Type' : 'text/html'})
    //     // res.end(data)

    //     console.log('Second Log');

    // })

    
}) 


server.listen(8000)