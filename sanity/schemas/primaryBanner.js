export default {
    name : 'primaryBanner',
    title : 'Primary Banner',
    type : 'document',
    fields : [
        // {
        //     name : 'image',
        //     title : 'image',
        //     type : 'image'
        // },
        // {
        //     name : 'bigText',
        //     title: 'Big Text',
        //     type : 'string'
        // },
         
        {
            name : 'product',
            title : 'Product',
            type : 'reference',
            to : [{type : 'product'}]
        },
        {
            name : 'smallText',
            title : 'Small Text',
            type :'string'
        }
    ]

}