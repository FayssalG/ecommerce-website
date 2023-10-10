export default {
    name : 'product',
    title : 'Product',
    type : 'document',
    fields : [
        {
            name : 'image',
            title : 'Image',
            type : 'array',
            of : [{type : 'image'}],
            options : {
                hotspot : true
            }
        },   
        {
            name : 'title',
            title : 'Title',
            type : 'string',
        },
        {
            name: 'brand',
            title : 'Brand',
            type : 'string'
        },
        {
            name : 'price',
            title : 'Price',
            type : 'number'
        },
        {
            name: 'quantity_stock',
            title : 'Quantity in Stock',
            type : 'number',
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options:{
                source : 'title',
                maxLength : 90
            }
        },
        {
            name: 'category',
            title : 'Category',
            type : 'reference',
            to : [
                {type : 'category'}
            ]
        }
    ]

}