// Contains functions that fetche the data from the sanity cms 
import {client} from '../../sanity/lib/client'



async function getProducts(){
    const query = '*[_type == "product"]'
    let products = await client.fetch(query)
    return  products
}

async function getProductsByCategory(category){
    const query = `*[_type == "category" && name=="${category}"]{
      "products" : *[_type=="product" && references(^._id)]
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
    return true
  }
  
  
async function getCategories(){
  const query = '*[_type == "category"]{ name }'
  let categories = await client.fetch(query)
  
  return  categories.map((cat)=>cat.name)
}

export {getProducts , getProductsByCategory, getProduct  ,getCategories  , checkCategory }