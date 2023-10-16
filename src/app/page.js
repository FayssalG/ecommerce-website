import Homepage from '@/views/pages/Homepage/Homepage'
import CartProvider from '@/views/providers/CartProvider'
import { client } from '../../sanity/lib/client'
import { getCategories } from '@/lib/sanity'


async function getProductsOfEachCategory(categories){
  let products = []
  const promises = categories.map(async category => {
    const query = `*[_type=="product" && category->name=="${category.name}"][0...10]{
      ...,
      category->
    }`
    return await client.fetch(query) 
  });
  products = await Promise.all(promises)
  return products.flat(1)
}

async function getSecondaryBanners(){
  const query = `*[_type=="secondaryBanner"]{...,
    "slug" : product->slug.current,
    "title" :  product->title,
    "image":product->image[0].asset , 
    "price":product->price
  }`
  const banners = await client.fetch(query)
  return banners
}

async function  getPrimaryBanner() {
    const query = `*[_type=="primaryBanner"]{...,
      "slug" : product->slug.current,
      "title" :  product->title,
      "image":product->image[0].asset ,
    }`
    const [banner] = await client.fetch(query)
    return banner 
}
export default async function Home() {
  const categories = await getCategories()
  const productsOfEachCategory = await getProductsOfEachCategory(categories)
  const secondaryBanners = await getSecondaryBanners()
  const primaryBanner = await getPrimaryBanner()
  return (
   <CartProvider>
     <Homepage categories={categories} secondaryBanners={secondaryBanners} primaryBanner={primaryBanner} productsPerCategory={productsOfEachCategory}/>
   </CartProvider>
  )
  
}
