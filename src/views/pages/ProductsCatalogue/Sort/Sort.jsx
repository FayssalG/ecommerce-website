'use client'
import { useProductsCatalogue } from "../ProductsCatalogueProvider"

export default function Sort() {
  const {sortBy , handleChangeSortBy} = useProductsCatalogue()
  return (
    <>
      
        <div >
            <form className='flex items-center justify-end'>
                <span className='text-slate-400 text-sm me-2'>Sort By</span>

                <select onChange={handleChangeSortBy} value={sortBy}  className='border-0  cursor-pointer'>
                  <option value=''>Latest</option>
                  <option value='price asc'>Price Ascending</option>
                  <option value='price desc'>Price Descending</option>
                </select>
            </form>
        </div>
    </>
  )
}
