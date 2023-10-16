import Product from "@/views/pages/Product/Product";

export default {
    name : 'secondaryBanner',
    title : 'Secondary Banner',
    type : 'document',
    fields : [
        {
            name : 'product',
            title :'Product',
            type : 'reference',
            to : [{type : 'product'}]
        },


        // {
        //     name : 'image',
        //     title : 'image',
        //     type : 'image'
        // },
        
        // {
        //     name : 'smallText',
        //     title : 'Small Text',
        //     type :'string'
        // },
        {
            name : 'oldPrice',
            title : 'Old Price',
            type : 'number',
        }
    ]

}