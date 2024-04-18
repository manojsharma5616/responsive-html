const URL="https://api.unsplash.com/search/photos?page=1&query=apple&client_id=wHppu4GaFMuD1Wl2Y2bqzbSuPMHHy6qX5LDwkC6mImA"
fetch(URL)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})