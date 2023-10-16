export default {
    name: 'category',
    title: 'Category',
    type : 'document',

    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name: 'title',
            title : 'Title',
            type : 'string'
        },
        {
            name: 'brands',
            title : 'Brands under this category',
            type : 'array',
            of : [
                {
                    type : 'reference',
                    to : [{type:'brand'}]
                }
            ]
        }

    ]

}