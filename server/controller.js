module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { bin_name, bin_price } = req.body;
    
        dbInstance.create_bin([ bin_name, bin_price ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },
    // SIMULATION - 1: 37D
      getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.read_single_bin([ params.id ])
          .then( bin => res.status(200).send( bin ) )
          .catch( () => res.status(500).send() );
      },
    
      getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.read_bin()
          .then( bins => res.status(200).send( bins ) )
          .catch( () => res.status(500).send() );
      },
      // SIMULATION - 1:74M
      update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_bins([ params.id, query.desc ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },
    
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_bin([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      }
    };
