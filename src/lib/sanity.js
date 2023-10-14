// Contains functions that fetche the data from the sanity cms 
import {client} from '../../sanity/lib/client'



async function getProducts(q , page , sortBy ){
    let productsPerPage = 10 
    let query = '*[_type == "product"]'
    if(q != null) query =  `*[_type == "product" && [title,brand] match "${q}*"]`
    if(page) query += `[${(page-1)*productsPerPage}...${page*productsPerPage}]`
    else query+= `[0...10]`
    if(sortBy) query += ` | order(${sortBy})`

    console.log(query)
    
    let products = await client.fetch(query)
    return  products
}

async function getProductsByCategory(category , q){
    let query = `*[_type == "category" && name=="${category}"]{
      "products" : *[_type=="product" && references(^._id)]
    }`

    if(q!= null) query = `*[_type == "category" && name=="${category}"]{
        "products" : *[_type=="product" && [title,brand] match "${q}*" && references(^._id)]
      }` 

    let products = await client.fetch(query)
    return  products[0]?.products
}


async function getProduct(slug){
    const query = `*[_type=="product" && slug.current=="${slug}"]`
    const [product] = await client.fetch(query)
    return product
  }

async function checkCategory(category){
    const query = `*[_type == "category" && name=="${category}"]`
    const [cat] = await client.fetch(query)
    if(!cat) return false
    return cat
  }
  
  
async function getCategories(q){
  const query = '*[_type == "category"]{ name , title }'
  let categories = await client.fetch(query)
  categories.unshift({name:'', title:'All'})
  categories = categories.map((cat)=>{
    return {...cat , withParams: (q ? '?q='+q : '')} 
    })
  return  categories
}

export {getProducts , getProductsByCategory, getProduct  ,getCategories  , checkCategory }