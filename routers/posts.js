import express from "express";
const router = express.Router(); //Creazione router
import { index, show, store, update, modify, destroy } from '../controllers/postControllers.js'//Importa controller di post
//Crud:
//Index (Tutti i post)
router.get('/', index);

//Show (Mostra solo un post)
router.get('/:id', show);

//Create (Creazione nuovo post)
router.post('/', store);

//Update (Aggiornamento intero post)
router.put('/:id', update);

//Modify (Aggiornamento parziale del post)
router.patch('/:id', modify);

//Destroy (Eliminazione post)
router.delete('/:id', destroy);

export default router;