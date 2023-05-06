export default {
    name: 'quotes',
    type: 'document',
    title: 'Quotes',
    fields: [
  {
    name: 'slug',
    type: 'string',
    title: 'slug',
    validation:Rule=>Rule.required()
     
    },
    {
      name:'quotes',
      type:'string',
      title:'Quotes',
      validation:Rule=>Rule.required()
    },
    
    {
      name:'firebaseId',
      type:'string',
      title:'FirebaseId',
      validation:Rule=>Rule.required()
    },
    {
      name:'imageurl',
      type:'string',
      title:'ImageURL',
      validation:Rule=>Rule.required()
    },
    {
      name:'quotestype',
      type:'string',
      title:'Quotestype',
      validation:Rule=>Rule.required(),
      options:{// it is used to store array of objects.
        list:[
          {title:'Life',value:'life'},//list of objects
          {title:'Love',value:'love'},
          {title:'success',value:'success'}
        ]
      }
    }
    

]
   }