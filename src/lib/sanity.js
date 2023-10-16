// Contains functions that fetche the data from the sanity cms 
import {client} from '../../sanity/lib/client'



async function getProducts(q , page , sortBy , brandsArray){ 
    let productsPerPage =  6
    console.log({brandsArray})
    let query = `*[_type == "product" `
  
    if(q) query +=  ` && [title,brand] match "${q}*" `
    if(brandsArray && brandsArray.length>0){
      query += ` && brand->name in [${brandsArray.map((b)=>`"${b}"`).join(',')}] `
    } 
    query+= ']{...,brand->}'


    if(page) query += `[${(page-1)*productsPerPage}...${page*productsPerPage}]`
    else query+= `[0...${productsPerPage}]`
    if(sortBy) query += ` | order(${sortBy})`
    
    let products = await client.fetch(query)
    return  products
}

async function getProductsByCategory(category , q , page , sortBy , brandsArray){
    let productsPerPage = 6
    
    let query = `*[_type == "category" && name=="${category}"]{
      "products" : *[_type=="product" && references(^._id)
    `
    if(q!= null) query += ` && [title,brand] match "${q}*"`     
    if(brandsArray && brandsArray.length>0){
      query += `&& brand->name in [${brandsArray.map((b)=>`"${b}"`).join(',')}] `
    } 

    query += `]{...,brand->}`

    if(page) query += `[${(page-1)*productsPerPage}...${page*productsPerPage}]`
    else query+= `[0...${productsPerPage}]`
    if(sortBy) query += ` | order(${sortBy})`
    query+= '}'
    
    let data = await client.fetch(query)
    return  data[0]?.products
}


async function getProduct(slug){
    const query = `*[_type=="product" && slug.current=="${slug}"]{
      ...,
      "brand" : brand->title
    }`
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
    return {...cat , params: (q ? '?q='+q : '') , route:'/products/'+cat.name} 
  })
  return  categories
}

async function getBrands(category , q ){
  let query = ''
  let brands = []
  if(category){
    query = `*[_type=="category" && name=="${category}"]{
      "brands" : brands[]->name
    }`
    brands = await client.fetch(query)
    brands = (brands[0]?.brands).map((b)=>b)
  } 
  else{
    query = `*[_type=="brand"]{name}`
    brands = await client.fetch(query)
    brands = brands.map((b)=>b.name)
  }
  
  return brands

}
export {getProducts , getBrands , getProductsByCategory, getProduct  ,getCategories  , checkCategory }